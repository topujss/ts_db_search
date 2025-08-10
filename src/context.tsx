import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState
} from 'react'
import axios from 'axios'

const AppContext = createContext()

const AppDataProvider = ({ children }) => {
	const [loading, setLoading] = useState(false)
	const [searchProduct, setSearchProduct] = useState('a')
	const [manyDrink, setManyDrink] = useState([])

	const getDrinks = useCallback(async () => {
		setLoading(true)
		try {
			const res = await axios.get(
				`${import.meta.env.VITE_SEARCH_API_URL}${searchProduct}`
			)
			const dataProduct = await res.data

			const { drinks } = dataProduct
			if (drinks) {
				const newDrinks = drinks?.map(item => {
					return {
						id: item.idDrink,
						name: item.strDrink,
						image: item.strDrinkThumb,
						info: item.strAlcoholic,
						glass: item.strGlass
					}
				})
				setManyDrink(newDrinks)
			} else {
				setManyDrink([])
			}
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.error(error?.message)
		}
	}, [searchProduct])

	// using useEffect
	useEffect(() => {
		getDrinks()
	}, [searchProduct, getDrinks])
	return (
		<AppContext.Provider
			value={{ loading, manyDrink, searchProduct, setSearchProduct }}>
			{children}
		</AppContext.Provider>
	)
}

// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppDataProvider }
