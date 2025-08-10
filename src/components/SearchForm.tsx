import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
	const { setSearchProduct } = useGlobalContext()
	const searchValue = useRef('')

	useEffect(() => {
		searchValue.current.focus()
	}, [])

	const searchDrink = () => {
		setSearchProduct(searchValue.current.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
	}
	return (
		<section className='section search'>
			<form onSubmit={handleSubmit} className='search-form'>
				<div className='form-control'>
					<label htmlFor='name'>Search your favorite drink</label>
					<input
						type='text'
						name='name'
						id='name'
						ref={searchValue}
						onChange={searchDrink}
					/>
				</div>
			</form>
		</section>
	)
}

export default SearchForm
