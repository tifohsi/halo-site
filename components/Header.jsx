import { FaHome, FaBook, FaStar } from 'react-icons/fa'
import { PiButterflyFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="px-8 py-8 flex items-center justify-between">
      <FaStar className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
      <nav className="ml-2 text-black text-xs sm:text-sm">
        <ul className="flex space-x-4">
          <li className="hover:cursor-pointer transition hover:scale-105">
            <Link to="/" className="flex items-center">
              <FaHome className="w-3 h-3 sm:w-4 sm:h-4 inline-block mr-2" />
              Home
            </Link>
          </li>
          <li className='hover:cursor-pointer transition hover:scale-105'>
            <Link to="/Backstory" className="flex items-center">
              <FaBook className="w-3 h-3 sm:w-4 sm:h-4 inline-block mr-2" />
              Backstory
            </Link>
          </li>
          <li className="hover:cursor-pointer transition hover:scale-105">
            <Link to="/Byf" className="flex items-center">
              <PiButterflyFill className="w-3 h-3 sm:w-4 sm:h-4 inline-block mr-2" />
              BYF
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}