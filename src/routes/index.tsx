import React from 'react'
import { RouteProps } from 'react-router-dom'
const Profile = React.lazy(() => import('../pages/Profile'))
const Invoices = React.lazy(() => import('../pages/Invoices'))

export interface RoutesProps {
  path: RouteProps['path']
  name: string
  element?: RouteProps['element']
  exact?: boolean
  icon?: string
  children?: RoutesProps[]
}

export const dashboardRoutes: RoutesProps[] = [
  {
    path: '/',
    name: 'Profile',
    icon: 'airplay',
    element: <Profile />
  },
  {
    path: '/invoices',
    name: 'Invoices',
    icon: 'airplay',
    element: <Invoices />
  },
  {
    path: '/invoices',
    name: 'Reports',
    icon: 'airplay',
    element: <Profile />
  },
  {
    path: '/invoices',
    name: 'Branches',
    icon: 'airplay',
    element: <Profile />
  },
  {
    path: '/invoices',
    name: 'Tests',
    icon: 'airplay',
    element: <Profile />
  },
  {
    path: '/invoices',
    name: 'Cultures',
    icon: 'airplay',
    element: <Profile />
  },
  {
    path: '/invoices',
    name: 'Culture options',
    icon: 'airplay',
    element: <Profile />
  },
  {
    path: '/invoices',
    name: 'Antibiotics',
    icon: 'airplay',
    element: <Profile />
  },
  {
    path: '/invoices',
    name: 'Doctors',
    icon: 'airplay',
    element: <Profile />
  },
  {
    path: '/invoices',
    name: 'Price List',
    icon: 'airplay',
    children: [
      {
        path: '/invoices',
        name: 'Tests',
        icon: 'airplay',
        element: <Profile />
      },
      {
        path: '/invoices',
        name: 'Cultures',
        icon: 'airplay',
        element: <Profile />
      }
    ]
  }
]
