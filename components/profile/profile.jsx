import Image from 'next/image'
import { clsx } from 'clsx'

export function Profile({ className, name, avatar, rating }) {
  return (
    <div
      className={clsx(
        className,
        'flex items-center ml-auto gap-2 text-teal-600 :bg-gray-600',
      )}>
      <Image
        className='rounded-full'
        width={48}
        height={48}
        src={avatar}
        alt='avatar'
      />
      <div className='overflow-hidden'>
        <div className='text-lg leading-tight truncate'>{name}</div>
        <div className='text-slate-400 text-xs leading-tight'>
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  )
}
