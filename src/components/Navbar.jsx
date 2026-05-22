import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-[100]
                      px-5 md:px-8 py-5
                      bg-black/30 backdrop-blur-md">

      {/* MOBILE */}

      <nav className="flex md:hidden w-full justify-evenly text-base font-medium text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-400' : 'text-white'
          }
        >
          Home
        </NavLink>

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

      {/* DESKTOP */}

      <div className="hidden md:flex justify-between items-center w-full">
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
      </div>
    </header>
  )
}

export default Navbar