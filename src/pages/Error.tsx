import { Link } from 'react-router-dom'

import erroGif from '../assets/original-e0c715c2ebdea828daed8c8cc53330e2.gif'

const Error = () => {
	return (
		<section className='section error-page'>
			<div className='error-container'>
				<h1>Oops! You are in Error page</h1>
				<img src={erroGif} alt='' />
				<Link to={'/'} className='btn btn-primary'>
					Go to Home
				</Link>
			</div>
		</section>
	)
}

export default Error
