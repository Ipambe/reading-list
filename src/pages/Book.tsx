import { useParams, Navigate } from 'react-router-dom'
import { getBookById } from '../helpers/getBookById'

export const Book = () => {
  const { id } = useParams()
  const findedBook = getBookById(id ?? '')
  if (!findedBook) return <Navigate to={'/'} />
  const { book } = findedBook
  const { title, author, ISBN, genre, pages, cover, synopsis, year } = book
  return (
    <section className='book'>
      <article>
        <img src={cover} alt={title} />
      </article>
      <aside>
        <h2>
          {title} <small>({author.name})</small>
        </h2>
        <p>{ISBN}</p>
        <p>Escrito en {year}.</p>
        <p>{pages} pages</p>
        <p>{genre}</p>
        <p>{synopsis}</p>
      </aside>
    </section>
  )
}
