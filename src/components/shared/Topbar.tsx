import { twMerge as tw } from 'tailwind-merge'
import FeatherIcon from 'feather-icons-react'

type TProps = {
  isMenuOpen: boolean
  setIsMenuOpen: (arg: boolean) => void
}

export default function Topbar({ setIsMenuOpen, isMenuOpen }: TProps) {
  return (
    <div className='h-20 w-full bg-indigo-400 text-white fixed p-4'>
      <button
        className={tw('text-slate-500', isMenuOpen && 'hidden md:block')}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FeatherIcon
          icon='menu'
          className='text-white'
        />
      </button>
    </div>
  )
}
