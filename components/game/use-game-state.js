import { GAME_SYMBOLS } from './constants'
import { useState } from 'react'
import { getNextMove, computeWinner } from './model'

export function useGameState(playersCount) {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    }),
  )

  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver)
  const winnerSequence = computeWinner(cells)
  const winnerSymbol =
    currentMove === nextMove ? currentMove : winnerSequence?.[0]

  const handleClickCell = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
        cells: lastGameState.cells.map((cell, i) =>
          index === i && cell === null ? lastGameState.currentMove : cell,
        ),
      }
    })
  }

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
      }
    })
  }

  // const checkIsCell = (index) => {
  //   return cells[index] === null
  // }

  return {
    cells,
    currentMove,
    nextMove,
    handleClickCell,
    winnerSequence,
    winnerSymbol,
    handlePlayerTimeOver,
  }
}
