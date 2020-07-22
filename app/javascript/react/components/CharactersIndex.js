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
    .then((body) => {
      setChars(body)
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
    .then((body) => {
      setChars([
        ...chars,
        body
      ])
    })
    .catch((error) => {
      console.error(`Error fetching new character: ${error.message}`)
    })
  }

  const deleteChar = (charID) => {
    fetch(`/api/v1/characters/${charID}`, {
      credentials: "same-origin",
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      if (response.ok){
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
      console.error(`Error deleting character: ${error.message}`)
    })
  }

  const editChar = (charID, charEdit) => {
    fetch(`/api/v1/characters/${charID}`, {
      credentials: "same-origin",
      method: "PATCH",
      body: JSON.stringify(charEdit),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
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
    .then((body) => {
      setChars(body)
    })
    .catch((error) => {
      console.error(`Error editing game: ${error.message}`)
    })
  }

  let characters = chars.map((char) => {
    return (
      <>
      <CharacterTile key={char.id} char={char} delete={deleteChar} edit={editChar}/>
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
