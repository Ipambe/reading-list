import { type Library } from '../types'
import { useNavigate } from 'react-router-dom'

interface AvailableBooksProps {
  library: Library
  onToggleLecture: (isbn: string) => void
}

export const AvailableBooks = ({
  library,
  onToggleLecture
}: AvailableBooksProps) => {
  const navigate = useNavigate()
  const openBook = (isbn: string) => {
    navigate(`book/${isbn}`)
  }
  const cantidadDisponible = library.filter(({ lecture }) => !lecture).length
  return (
    <section className='available-section'>
      <h2>
        Libros disponibles <small>({cantidadDisponible})</small>
      </h2>
      <ul>
        {library.map(({ ISBN, cover, title, lecture }) => (
          <li key={ISBN} className={lecture ? 'lecture' : ''}>
            <img
              src={cover}
              alt={title}
              onClick={onToggleLecture.bind(null, ISBN)}
            />
            <h3 onClick={openBook.bind(null, ISBN)}>Ver más...</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}
