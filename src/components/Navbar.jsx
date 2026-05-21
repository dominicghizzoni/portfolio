import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <header className="sticky top-0 left-0 w-full z-[100] px-8 py-5 flex justify-between items-center bg-black/30 backdrop-blur-md">
      {/* Logo */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-lg font-medium ${
            isActive ? 'text-blue-400' : 'text-white'
          }`
        }
      >
        Home
      </NavLink>

      {/* Navigation */}
      <nav className="flex gap-8 text-lg font-medium text-white">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-400' : 'text-white'
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-blue-400' : 'text-white'
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-blue-400' : 'text-white'
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar