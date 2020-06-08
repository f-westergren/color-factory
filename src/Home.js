import React from 'react'
import { Link } from 'react-router-dom'
import ColorList from './ColorList'
import './Home.css'

const Home = ({colors}) => {

  return (
    <div className="Home">
      <div className="Home-div">
        <h2 className="Home-title">Welcome to the color factory.</h2>
        <Link className="Home-Link" to='/colors/new'><h1>Add a color</h1></Link>
      </div>
      <ColorList className="Home-list" colors={colors} />
    </div>
  )
}

export default Home