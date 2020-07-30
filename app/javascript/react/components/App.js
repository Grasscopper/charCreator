import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CharactersIndex from './CharactersIndex'
import CharacterShow from './CharacterShow'

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CharactersIndex} />
        <Route exact path="/characters" component={CharactersIndex} />
        <Route exact path="/characters/:id" component={CharacterShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
