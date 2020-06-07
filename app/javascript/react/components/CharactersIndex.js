import React, { useState, useEffect } from 'react'
import CharacterTile from './CharacterTile'

const CharactersIndex = (props) => {
  let [chars, setChars] = useState([])

  useEffect(() => {
    fetch('api/v1/characters')
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status}: ${response.statusText}`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      setChars(body)
    })
    .catch((error) => {
      console.error(`Error fetching characters: ${error.message}`)
    })
  }, [])

  let characters = chars.map((char) => {
    return (
      <CharacterTile char={char} />
    )
  })

  return (
    <div>{characters}</div>
  )
}

export default CharactersIndex
