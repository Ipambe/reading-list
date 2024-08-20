import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { NavBar } from './components/NavBar'
import { Book } from './pages/Book'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='book/:id' element={<Book />} />
      </Routes>
    </>
  )
}

export default App
