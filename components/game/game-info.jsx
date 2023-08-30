import clsx from 'clsx'
import { Profile } from '../profile/profile'
import { CrossIcon } from './icons/cross-icon'
import { ZeroIcon } from './icons/zero-icon'

import avatarSrc1 from './images/avatar-1.png'
import avatarSrc2 from './images/avatar-2.png'
import avatarSrc3 from './images/avatar-3.png'
import avatarSrc4 from './images/avatar-4.png'
import { GAME_SYMBOLS } from './constants'
import { GameSymbol } from './game-symbol'
import { useEffect, useState } from 'react'

const profiles = [
  {
    id: 1,
    name: 'LonelySS',
    avatar: avatarSrc1,
    rating: 1200,
    symbol: GAME_SYMBOLS.CROSS,
    time: '01:30',
  },
  {
    id: 2,
    name: 'VereIntedinglapotur',
    avatar: avatarSrc2,
    rating: 1100,
    symbol: GAME_SYMBOLS.ZERO,
    time: '01:30',
  },
  {
    id: 3,
    name: 'SheJustPlay',
    avatar: avatarSrc3,
    rating: 1000,
    symbol: GAME_SYMBOLS.TRIANGLE,
    time: '01:30',
  },
  {
    id: 4,
    name: 'ThirdMaster',
    avatar: avatarSrc4,
    rating: 970,
    symbol: GAME_SYMBOLS.SQUARE,
    time: '01:30',
  },
]

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  handlePlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        'bg-white rounded-xl shadow-md py-4 px-8 grid grid-cols-2 justify-between gap-3',
      )}>
      {profiles.slice(0, playersCount).map((player, index) => {
        return (
          <PlayerInfo
            playerInfo={player}
            key={player.id}
            isRight={index % 2 === 1}
            isTimeRunning={currentMove === player.symbol && !isWinner}
            onTimeOver={() => handlePlayerTimeOver(player.symbol)}
          />
        )
      })}
    </div>
  )
}

function PlayerInfo({ playerInfo, isRight, isTimeRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(6)

  const minuteString = String(Math.floor(seconds / 60)).padStart(2, '0')
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, '0')

  const isDanger = seconds < 10

  useEffect(() => {
    if (isTimeRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0))
      }, 1000)

      return () => {
        clearInterval(interval)
        setSeconds(6)
      }
    }
  }, [isTimeRunning])

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds])

  const getTimerColor = () => {
    if (isTimeRunning) {
      return isDanger ? 'text-orange-600' : 'text-slate-900'
    }

    return 'text-slate-300'
  }

  return (
    <div
      className={clsx(
        'flex items-center gap-3',
        isRight && 'flex-row-reverse',
      )}>
      <div className='relative'>
        <Profile
          className='w-44'
          name={playerInfo.name}
          avatar={playerInfo.avatar}
          rating={playerInfo.rating}
        />
        <div className='w-5 h-5 rounded-full bg-white shadow absolute -top-1 -left-1 flex items-center justify-center'>
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className='h-6 w-px bg-slate-200'></div>
      <div className={clsx('text-lg font-semibold w-14W', getTimerColor())}>
        {minuteString}:{secondsString}
      </div>
    </div>
  )
}
