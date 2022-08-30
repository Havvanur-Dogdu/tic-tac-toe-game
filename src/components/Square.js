import React from 'react'

function Square({ onClick, value, winner }) {
  return (
    <button className='square' disabled={winner ? true : false} onClick={onClick}>
    {value}
    </button>
  )
}

export default Square