import { BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './routes/AllRoutes'
import Layout from './components/layouts'

export default function App() {
  return (
    <Router>
      <Layout>
        <AllRoutes />
      </Layout>
    </Router>
  )
}
