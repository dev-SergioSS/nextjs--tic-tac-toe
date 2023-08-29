import { useState } from 'react'
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from '../components/game'
import { Header } from '../components/header'

export default function App() {
  const [playersCount] = useState(2)
  const { cells, currentMove, nextMove, handleClickCell, winnerSequence } =
    useGameState(playersCount)

  return (
    <div className='min-h-screen bg-slate-50'>
      <Header />
      <main className='pt-6 mx-auto w-max'>
        <GameTitle className='mt-6' playersCount={playersCount} />
        <GameInfo
          className='mt-4'
          playersCount={playersCount}
          currentMove={currentMove}
        />
        <GameField
          className='mt-6'
          playersCount={playersCount}
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleClickCell={handleClickCell}
          winnerSequence={winnerSequence}
        />
      </main>
    </div>
  )
}
