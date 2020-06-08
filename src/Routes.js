import React, { useState } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './Home'
import Color from './Color'
import NewColorForm from './NewColorForm'

const Routes = () => {
  const initialState = [{name: 'superred', hexCode: '#ff4522'}, {name: 'sunflower', hexCode: '#f5ff22'}]
  const [colors, setColors] = useState(initialState)

  const addColor = newColor => {
    setColors(colors => [...colors, newColor])
  }

  return (
    <Switch>
      <Route exact path='/colors'><Home colors={colors} /></Route>
      <Route exact path='/colors/new'><NewColorForm addColor={addColor} /></Route>
      <Route exact path='/colors/:color'><Color colors={colors} /></Route>
      <Redirect to='/colors' />
    </Switch>
  )
}

export default Routes

