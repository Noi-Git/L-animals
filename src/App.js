import { useState } from 'react'
import AnimalShow from './AnimalShow'

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals(getRandomAnimal())
  }

  return (
    <div>
      <AnimalShow />
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  )
}

export default App
