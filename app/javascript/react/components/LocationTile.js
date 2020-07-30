import React from 'react'

const LocationTile = (props) => {
  return (
    <li>{props.location.name}: {props.location.rating}</li>
  )
}

export default LocationTile
