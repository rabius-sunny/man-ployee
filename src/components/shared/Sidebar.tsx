import { twMerge as tm } from 'tailwind-merge'
import { dashboardRoutes } from '../../routes'
import { Link } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

export default function Sidebar({
  isOpen,
  setIsMenuOpen
}: {
  isOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}) {
  return (
    <div
      className={tm(
        'z-50 relative w-full max-w-[200px] -ml-[200px] lg:block duration-300',
        isOpen ? 'ml-0' : '-ml-[200px]'
      )}
    >
      <div className='fixed bg-slate-500 h-screen p-4 max-w-[200px] w-full overflow-y-auto'>
        <div className='flex justify-end md:hidden'>
          <button
            className='cursor-pointer'
            onClick={() => setIsMenuOpen(!isOpen)}
          >
            <FeatherIcon
              icon='menu'
              className='text-white'
            />
          </button>
        </div>
        <div className='grid gap-8 text-white mt-4 md:mt-0'>
          {dashboardRoutes.map((route, idx) => (
            <Link
              key={idx}
              to={route.path as string}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
