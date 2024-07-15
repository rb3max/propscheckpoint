import React from 'react'

const Cards = ({el}) => {
  return (
    <div className='card'>
        <img src={el.img} alt="" />
        <h1>{el.name}</h1>
        <h2>{el.nationality}</h2>
    </div>
  )
}

export default Cards