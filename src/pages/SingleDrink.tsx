import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const SingleDrink = () => {
	const { id } = useParams()
	const [loading, setLoading] = useState(false)
	const [singleDrinkData, setSingleDrinkData] = useState(null)

	useEffect(() => {
		setLoading(true)
		const getDrink = async () => {
			try {
				const res = await axios.get(
					`${import.meta.env.VITE_SINGLE_API_URL}${id}`
				)
				const dataProduct = res.data

				if (dataProduct.drinks) {
					const {
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strInstructions: instructions,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5
					} = dataProduct.drinks[0]

					const ingredients = [
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5
					]
					const newDrink = {
						name,
						image,
						info,
						category,
						glass,
						instructions,
						ingredients
					}
					setSingleDrinkData(newDrink)
				} else {
					setSingleDrinkData(null)
				}
			} catch (error) {
				console.log(error.message)
			}
			setLoading(false)
		}
		getDrink()
	}, [id])

	// loading preview show
	if (loading) {
		return <Loading />
	}

	// drink show for single drink
	if (!singleDrinkData) {
		return <h2 className='section-title'>No drink for show</h2>
	} else {
		const { name, image, category, info, glass, instructions, ingredients } =
			singleDrinkData
		return (
			<section className='section cocktail-section'>
				<Link to={'/'} className='btn btn-primary'>
					Go to home
				</Link>
				<h2 className='section-title'>{name}</h2>
				<div className='drink'>
					<img src={image} alt={image} />
					<div className='drink-info'>
						<p>
							<span className='drink-data'>Name: </span>
							{name}
							<span className='drink-data'>Category: </span> {category}
							<span className='drink-data'>Info: </span>
							{info}
							<span className='drink-data'>Glass: </span> {glass}
							<span className='drink-data'>Instructions: </span> {instructions}
							<span className='drink-data'>Ingredients: </span>{' '}
							{ingredients?.map((item, index: number) => {
								return item ? <span key={index}>{item}</span> : null
							})}
						</p>
					</div>
				</div>
			</section>
		)
	}
}

export default SingleDrink
