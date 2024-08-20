import { useNavigate } from 'react-router-dom'
import { type Library } from '../types'

interface LectureListBooksProps {
  lectureBooks: Library
  onToggleLecture: (isbn: string) => void
}

const DeleteSVG = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='25'
    height='25'
    viewBox='0 0 24 24'
  >
    <path
      fill='#000000'
      d='M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8m3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a.999.999 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12z'
    />
  </svg>
)

export const LectureListBooks = ({
  lectureBooks,
  onToggleLecture
}: LectureListBooksProps) => {
  const navigate = useNavigate()
  const openBook = (isbn: string) => {
    navigate(`book/${isbn}`)
  }

  return (
    <aside className='lecture-books'>
      <h2>
        Lista de lectura <small>({lectureBooks.length})</small>
      </h2>
      <ul>
        {lectureBooks.map(({ ISBN, cover, title, year }) => (
          <li key={ISBN}>
            <img src={cover} alt={title} />
            <span onClick={openBook.bind(null, ISBN)}>
              <h3>
                {title} <small>({year})</small>
              </h3>
              <small>Ver más...</small>
            </span>
            <button onClick={onToggleLecture.bind(null, ISBN)}>
              <DeleteSVG />
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
