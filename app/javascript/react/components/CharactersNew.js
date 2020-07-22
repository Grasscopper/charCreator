import React, { useState } from 'react'

const CharactersNew = (props) => {
  let [formPayload, setFormPayload] = useState({
    name: "",
    bio: "",
    stats: ""
  })

  let update = (event) => {
    event.preventDefault()
    setFormPayload({
      ...formPayload,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  let charSubmit = (event) => {
    event.preventDefault()
    props.postNewChar(formPayload)
    setFormPayload({
      name: "",
      bio: "",
      stats: ""
    })
  }

  return (
    <form autoComplete="off" onSubmit={charSubmit}>
    <label htmlFor="name">Name</label>
    <input
    id="name"
    name="name"
    type="text"
    onChange={update}
    value={formPayload.name}
    />
    <label htmlFor="bio">Bio</label>
    <input
    id="bio"
    name="bio"
    type="text"
    onChange={update}
    value={formPayload.bio}
    />
    <label htmlFor="stats">Stats</label>
    <input
    id="stats"
    name="stats"
    type="text"
    onChange={update}
    value={formPayload.stats}
    />
    <input id="submit" type="submit" value="Submit"/>
    </form>
  )
}

export default CharactersNew
