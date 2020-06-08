import React from 'react'
import { Link } from 'react-router-dom'

const ColorList = ({colors}) => {
  return (
    <div>
      {colors.map((c, idx) => (
        <Link to={`/colors/${c.name}`} key={idx}><p className='ColorList-listItem' key={idx}>{c.name}</p></Link>
      ))}
    </div>
  )
}

export default ColorList