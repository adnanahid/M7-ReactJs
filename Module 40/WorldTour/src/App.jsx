import { useState } from 'react'
import './App.css'
import Country from './World/country'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WorldTour</h1>
      <Country></Country>
    </>
  )
}

export default App
