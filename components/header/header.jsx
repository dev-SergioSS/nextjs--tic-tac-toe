import { Profile } from '../profile/profile'
import { UiButton } from '../ui-kit/ui-button'
import { ArrowDownIcon } from './icons/arrow-down-icon'
import logoSrc from './logo.svg'
import Image from 'next/image'

export function Header() {
  return (
    <header className='flex h-24 items-center px-8 bg-white shadow-lg'>
      <Image src={logoSrc} alt='logo' />
      <div className='w-px h-8 bg-slate-800 mx-6'></div>
      <UiButton className='w-44' variant='primary' size='lg'>
        Грати
      </UiButton>
      <button className='flex items-center ml-auto gap-2  text-teal-600 hover:text-teal-500 transition-colors'>
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  )
}
