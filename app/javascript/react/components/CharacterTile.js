import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CharacterTile = (props) => {
  let [editing, setEditing] = useState(false)
  let [editedGame, setEditedGame] = useState({
    name: props.char.name,
    bio: props.char.bio,
    stats: props.char.stats
  })

  function charDelete(event) {
    event.preventDefault()
    props.delete(props.char.id)
  }

  function submitEdit(event) {
    event.preventDefault()
    props.edit(props.char.id, editedGame)
    setEditing(false)
  }

  function editForm(event) {
    event.preventDefault()
    setEditing(!editing)
  }

  function update(event) {
    event.preventDefault()
    setEditedGame({
      ...editedGame,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  let form = <div></div>
  if (editing) {
    form = <form autoComplete="off" onSubmit={submitEdit}>
    <label htmlFor="name">Name</label>
    <input
    id="name"
    name="name"
    type="text"
    onChange={update}
    value={editedGame.name}
    />
    <label htmlFor="bio">Bio</label>
    <input
    id="bio"
    name="bio"
    type="text"
    onChange={update}
    value={editedGame.bio}
    />
    <label htmlFor="stats">Stats</label>
    <input
    id="stats"
    name="stats"
    type="text"
    onChange={update}
    value={editedGame.stats}
    />

    <input type="submit" value="Submit Edit" id="edit-submit-button" />
    </form>
  }

  return (
    <>
    <Link to={`/characters/${props.char.id}`}>
      <h2>{props.char.name}</h2>
    </Link>
    <p>Bio: {props.char.bio}</p>
    <p>Stats: {props.char.stats}</p>
    {form}
    <button onClick={editForm} id="edit-button">Edit</button>
    <button onClick={charDelete}>Delete</button>
    </>
  )
}

export default CharacterTile
