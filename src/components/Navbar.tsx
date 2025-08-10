import { Link } from 'react-router-dom'

import logo from '../assets/react.svg'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<Link to={'/'}>
					<img src={logo} alt='page logo' className='nav-logo' />
				</Link>
				<ul className='nav-links'>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/about/42'}>Error</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
