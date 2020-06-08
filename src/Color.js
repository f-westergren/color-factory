import React from 'react'
import { useParams, Link, Redirect } from 'react-router-dom'
import './Color.css'



const Color = ({colors}) => {
  const {color} = useParams()
  const showColor = colors.find(c => c.name.toLowerCase() === color.toLowerCase())

  if (!showColor) {
    return <Redirect to='/colors' />
  }
  return (
    <div className='Color' style={{backgroundColor: showColor.hexCode}}>
      {showColor.name}
      <Link to='/colors'>Go back</Link>
    </div>
    
  )
}

export default Color