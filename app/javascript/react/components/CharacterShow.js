import React, { useState, useEffect } from 'react'
import LocationTile from './LocationTile'

const CharacterShow = (props) => {
  let [char, setChar] = useState({
    name: "",
    bio: "",
    stats: "",
    locations: []
  })
  useEffect(() => {
    fetch(`/api/v1/characters/${props.match.params.id}`)
    .then(response => response.json())
    .then(body => {
      setChar(body)
    })
    .catch(error => console.error(error))
  }, [])

  let locationTiles = char.locations.map((location) => {
    return (
      <LocationTile location={location} />
    )
  })

  return (
    <div className="grid-container">
      <h2>{char.name}</h2>
      <p>Bio: {char.bio}</p>
      <p>Stats: {char.stats}</p>
      <h3>Character Locations and Rating</h3>
      {locationTiles}
    </div>
  )
}

export default CharacterShow
