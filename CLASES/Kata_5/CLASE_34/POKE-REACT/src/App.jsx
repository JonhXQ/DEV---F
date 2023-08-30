import './App.css'
import Navbar from './components/Navbar'
import RouterIndex from './routes/RouterIndex'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RouterIndex />
      </BrowserRouter>
    </>
  )
}

export default App
