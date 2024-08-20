import { Select } from '../components/Select'
import { AvailableBooks } from '../components/AvailableBooks'
import { LectureListBooks } from '../components/LectureListBooks'
import { useBook } from '../hooks/useBook'
import './booksStyles.css'

export const Main = () => {
  const { userLibrary, toggleLecture, lectureBooks, changeGenre } = useBook()

  return (
    <>
      <Select changeGenre={changeGenre} />
      <main>
        <AvailableBooks library={userLibrary} onToggleLecture={toggleLecture} />
        {lectureBooks.length ? (
          <LectureListBooks
            lectureBooks={lectureBooks}
            onToggleLecture={toggleLecture}
          />
        ) : (
          <></>
        )}
      </main>
    </>
  )
}
