import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import SingleDrink from './pages/SingleDrink'
import Error from './pages/Error'

// components
import Navbar from './components/Navbar'

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='drink/:id' element={<SingleDrink />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	)
}

export default App
