import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PokemonDetail () {
  const { id } = useParams()
  const [ pokemonDetails, setPokemonDetails ] = useState (null);

  console.log(id)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/${apiVersion}/pokemon/${id}`)
      .then(response => response.json())
      .then(dataJson => {
        console.log(dataJson)
        setPokemonDetails(dataJson)
      })
      .catch(error => console.log(error))
  }, [id, apiVersion])

  return (
    <>
      <div>PokemonDetail</div>
      <h1>{pokemonDetails.name}</h1>
    </>
  )
}

export default PokemonDetail