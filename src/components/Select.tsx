import { genres } from '../data/constants'

interface SelectProps {
  changeGenre: (genre: string) => void
}

export const Select = ({ changeGenre }: SelectProps) => {
  return (
    <select
      onChange={(e) => {
        changeGenre(e.target.value)
      }}
      className='select-genre'
    >
      <option value='Todos'>Todos</option>
      {genres.map((genre, index) => (
        <option key={index} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  )
}
