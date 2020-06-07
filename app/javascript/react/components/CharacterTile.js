import React from 'react'

const CharacterTile = (props) => {
  return (
    <>
    <p>Name: {props.char.name}</p>
    <p>Bio: {props.char.bio}</p>
    <p>Stats: {props.char.stats}</p>
    </>
  )
}

export default CharacterTile
