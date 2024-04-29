import { Route, Routes } from 'react-router-dom'
import { dashboardRoutes } from '.'

export default function AllRoutes() {
  return (
    <Routes>
      {dashboardRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  )
}
