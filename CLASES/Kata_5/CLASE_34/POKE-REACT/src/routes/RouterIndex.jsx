import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import PokemonDatails from '../pages/PokemonDetails'

const RouterIndex = () => {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/pokemon/:id' element={<PokemonDatails />} />
    </Routes>
  )
}

export default RouterIndex