import React from 'react'

const CharacterTile = (props) => {
  function charDelete(event) {
    event.preventDefault()
    props.deleteChar(props.char.id)
  }
  return (
    <>
    <p>Name: {props.char.name}</p>
    <p>Bio: {props.char.bio}</p>
    <p>Stats: {props.char.stats}</p>
    <button onClick={charDelete}>Delete</button>
    </>
  )
}

export default CharacterTile
