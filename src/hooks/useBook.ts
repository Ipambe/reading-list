import { useEffect, useRef, useState } from 'react'
import { library } from '../data/mappedbooks'
import { type Library } from '../types'

export const useBook = () => {
  const [userLibrary, setUserLibrary] = useState<Library>(() => {
    const storedLibrary = localStorage.getItem('books') ?? JSON.stringify(library)
    const parsedLibrary = JSON.parse(storedLibrary) as Library
    return parsedLibrary
  })
  const previousLibrary = useRef(userLibrary)
  const [genre, setGenre] = useState('Todos')

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(previousLibrary.current))
  }, [userLibrary])

  useEffect(() => {
    if (genre === 'Todos') {
      setUserLibrary(previousLibrary.current)
      return
    }
    setUserLibrary(previousLibrary.current.filter((e) => e.genre === genre))
  }, [genre])

  const toggleLecture = (isbn: string) => {
    setUserLibrary((prev) => {
      return prev.map((e) => {
        if (e.ISBN === isbn) return { ...e, lecture: !e.lecture }
        return e
      })
    })

    previousLibrary.current = previousLibrary.current.map((e) => {
      if (e.ISBN === isbn) return { ...e, lecture: !e.lecture }
      return e
    })
  }

  const changeGenre = (genre: string) => {
    setGenre(genre)
  }

  const lectureBooks = userLibrary.filter((e) => e.lecture)

  return { userLibrary, toggleLecture, lectureBooks, changeGenre }
}
