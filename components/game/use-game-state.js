import { GAME_SYMBOLS } from './constants'
import { useState } from 'react'
import { getNextMove, computeWinner } from './model'

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }))

  const nextMove = getNextMove(currentMove, playersCount)
  const winnerSequence = computeWinner(cells)

  const handleClickCell = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
        cells: lastGameState.cells.map((cell, i) =>
          index === i && cell === null ? lastGameState.currentMove : cell,
        ),
      }
    })
  }

  const checkIsCell = (index) => {
    return cells[index] === null
  }

  return { cells, currentMove, nextMove, handleClickCell, winnerSequence }
}
