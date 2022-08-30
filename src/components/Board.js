import React, {useState} from 'react'
import Info from './Info'
import Square from './Square'

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [player1, setPlayer1] = useState(true)
    const [count, setCount] = useState(0)

    const status = player1 ? 'X' : 'O'

    const calculateWinnerPlayer = () => {
        const winningStates = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ]

          for (let i = 0; i < winningStates.length; i++) {
            
            const [a, b, c] = winningStates[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }

          if(count >= 9) {
            const scoreless = 'scoreless'
            return scoreless;
          }
        return null;
    }

    const winner = calculateWinnerPlayer()

    const handleClick = (i) => {
        
        setCount(count + 1)

        let newSquares = [...squares]
        newSquares[i] = player1 ? 'X' : '0'
        
        setSquares(newSquares)

        setPlayer1(!player1)
    }

    const handleRestart = () => {
        setSquares(Array(9).fill(null))
        setPlayer1(true)
        setCount(0)
    }

  return (
    <div className='board-container'>
        <div className='board'>
        <div className='board-row'>
            <Square value={squares[0]} winner={winner} onClick={() => handleClick(0)} />
            <Square value={squares[1]} winner={winner} onClick={() => handleClick(1)} />
            <Square value={squares[2]} winner={winner} onClick={() => handleClick(2)} />
        </div>
        <div className='board-row'>
            <Square value={squares[3]} winner={winner} onClick={() => handleClick(3)} />
            <Square value={squares[4]} winner={winner} onClick={() => handleClick(4)} />
            <Square value={squares[5]} winner={winner} onClick={() => handleClick(5)} />
        </div>
        <div className='board-row'>
            <Square value={squares[6]} winner={winner} onClick={() => handleClick(6)} />
            <Square value={squares[7]} winner={winner} onClick={() => handleClick(7)} />
            <Square value={squares[8]} winner={winner} onClick={() => handleClick(8)} />
        </div>
    </div>
    <Info status={status} winner={winner} handleRestart={handleRestart}/>
    </div>
  )
}

export default Board