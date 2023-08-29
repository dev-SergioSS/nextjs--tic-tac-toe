import clsx from 'clsx'
import { UiButton } from '../ui-kit/ui-button'
import { GameSymbol } from './game-symbol'
import { useGameState } from './use-game-state'

export function GameField({
  className,
  playersCount,
  cells,
  currentMove,
  nextMove,
  handleClickCell,
  winnerSequence,
}) {
  const actions = (
    <>
      <UiButton size='md' variant='primary'>
        Нічия
      </UiButton>
      <UiButton size='md' variant='outline'>
        Здатися
      </UiButton>
    </>
  )

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, i) => (
          <GameCell
            key={i}
            onClick={() => {
              handleClickCell(i)
            }}
            isWinner={winnerSequence?.includes(i)}>
            {symbol && <GameSymbol symbol={symbol} className='h-4 w-4' />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  )
}

function GameCell({ children, onClick, isWinner }) {
  return (
    <button
      className={clsx(
        'border border-slate-200 -mt-px -ml-px flex justify-center items-center',
        isWinner && 'bg-orange-600/10',
      )}
      onClick={onClick}>
      {children}
    </button>
  )
}

function GameGrid({ children }) {
  return (
    <div className='grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3'>
      {children}
    </div>
  )
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        'bg-white rounded-2xl shadow-md px-8 pt-5 pb-7',
      )}>
      {children}
    </div>
  )
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className='flex gap-3 items-center'>
      <div className='mr-auto'>
        <div className='flex items-center gap-1 text-xl leading-tight font-semibold'>
          Хід: <GameSymbol symbol={currentMove} className='h-5 w-5' />
        </div>
        <div className='flex items-center gap-1 text-xs leading-tight text-slate-400'>
          Наступний: <GameSymbol symbol={nextMove} />
        </div>
      </div>

      {actions}
    </div>
  )
}
