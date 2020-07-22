import React, { useState, useEffect } from 'react'
import CharacterTile from './CharacterTile'
import CharactersNew from './CharactersNew'

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
    .then((characters) => {
      setChars(characters)
    })
    .catch((error) => {
      console.error(`Error fetching characters: ${error.message}`)
    })
  }, [])

  const postNewChar = (formPayload) => {
    fetch('api/v1/characters', {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
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
    .then((character) => {
      setChars([
        ...chars,
        character
      ])
    })
    .catch((error) => {
      console.error(`Error fetching new character: ${error.message}`)
    })
  }

  let characters = chars.map((char) => {
    return (
      <>
      <CharacterTile key={char.id} char={char} />
      <p>----------------------</p>
      </>
    )
  })

  return (
    <>
    <CharactersNew postNewChar={postNewChar}/>
    <div>{characters}</div>
    </>
  )
}

export default CharactersIndex
