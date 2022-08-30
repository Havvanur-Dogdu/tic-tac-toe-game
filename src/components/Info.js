import React from 'react'

function Info({ status, winner, handleRestart }) {
  return (
    <div className='info'>

        { winner ? 
        <strong>Winner: {winner}</strong>

         : 
        <strong>Next Player: {status}</strong> }

        <button className='restart-button' onClick={handleRestart} >{ winner ? 'PLAY' : 'Restart Game' }</button>
    </div>
  )
}

export default Info