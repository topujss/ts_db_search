import { useGlobalContext } from '../context'
import Drink from './Drink'
import Loading from './Loading'

const DrinkList = () => {
	const { manyDrink, loading } = useGlobalContext()
	if (loading) {
		return <Loading />
	}

	if (manyDrink?.length < 1) {
		return <h2 className='section-title'>No drink matched. Search again.</h2>
	}
	return (
		<section className='section'>
			<h2 className='section-title'>Drinks</h2>
			<div className='cocktails-center'>
				{manyDrink?.map(item => {
					return <Drink key={item.id} singleDrinkData={item} />
				})}
			</div>
		</section>
	)
}

export default DrinkList
