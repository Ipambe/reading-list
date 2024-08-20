import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <Link to='/'>
        <h1>Reading list</h1>
      </Link>
    </nav>
  )
}
