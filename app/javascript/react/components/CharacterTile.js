import React, { useState } from 'react'

const CharacterTile = (props) => {
  let [editing, setEditing] = useState(false)
  let [editedGame, setEditedGame] = useState({
    name: "",
    bio: "",
    stats: ""
  })

  function charDelete(event) {
    event.preventDefault()
    props.delete(props.char.id)
  }

  function submitEdit(event) {
    event.preventDefault()
    props.edit(props.char.id, editedGame)
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

    <input type="submit" value="Submit" id="edit-submit-button" />
    </form>
  }

  return (
    <>
    <p>Name: {props.char.name}</p>
    <p>Bio: {props.char.bio}</p>
    <p>Stats: {props.char.stats}</p>
    {form}
    <button onClick={editForm} id="edit-button">Edit</button>
    <button onClick={charDelete}>Delete</button>
    </>
  )
}

export default CharacterTile
