import { ReactNode, useState } from 'react'
import Topbar from '../shared/Topbar'
import Sidebar from '../shared/Sidebar'

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  return (
    <div className='flex relative'>
      <Sidebar
        setIsMenuOpen={setIsMenuOpen}
        isOpen={isMenuOpen}
      />
      <div className='w-full relative'>
        <Topbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <div className='mt-20 p-4 w-full bg-slate-200/80 h-screen'>
          {children}
        </div>
      </div>
    </div>
  )
}
