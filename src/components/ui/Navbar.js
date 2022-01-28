import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import './navbar.css'

export const Navbar = () => {

  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/login', { replace: true } )
  }

	return (

		<nav className="navbar navbar-expand-sm navbar-dark bg-black">

			<Link
				className="navbar-brand"
				to="/"
			>
				Home
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav menu-items">

					<NavLink
						className={ ( {isActive} ) => { return "nav-item nav-link + (isActive ? 'active' : '')"} }
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						className={ ( {isActive} ) => { return "nav-item nav-link + (isActive ? 'active' : '')"} }
						to="/dc"
					>
						DC
					</NavLink>
					<NavLink
						className={ ( {isActive} ) => { return "nav-item nav-link + (isActive ? 'active' : '')"} }
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto logout-wrapper">
					<span className="nav-item nav-link text-warning "> Nacho </span>
					<button
						className="nav-item nav-link btn btn-outline-warning"
						onClick={ handleLogout }
					>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	)
}
