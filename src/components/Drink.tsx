import { Link } from 'react-router-dom'

const Drink = ({ singleDrinkData }) => {
	const { image, name, id, info, glass } = singleDrinkData

	return (
		<article className='cocktail'>
			<aside className='img-container'>
				<img src={image} alt={name} />
			</aside>
			<section className='cocktail-footer'>
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p>{info}</p>
				<Link to={`drink/${id}`} className='btn btn-primary btn-details'>
					Details
				</Link>
			</section>
		</article>
	)
}

export default Drink
