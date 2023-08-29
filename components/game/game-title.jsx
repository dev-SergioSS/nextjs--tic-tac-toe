import Link from 'next/link'
import { ArrowLeftIcon } from './icons/arrow-left-icon'
import { StarIcon } from './icons/star-icon'
import { UserIcon } from './icons/user-icon'
import { HistoryIcon } from './icons/history-icons'

export function GameTitle({ playersCount }) {
  return (
    <div>
      <div className='pl-2'>
        <Link
          href='#'
          className='flex items-center gap-2 text-xs text-teal-600'>
          <ArrowLeftIcon />
          Головна
        </Link>
        <h1 className='text-4xl leading-tight -mt-0.5'>Хрестики нулики</h1>
        <div className='flex items-center gap-3 text-xs text-slate-400'>
          <StarIcon />
          <div className='flex items-center gap-1'>
            <UserIcon /> {playersCount}
          </div>
          <div className='flex items-center gap-1'>
            <HistoryIcon /> 1 хв на хід
          </div>
        </div>
      </div>
    </div>
  )
}
