import loadable from '@loadable/component'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './kit/Loader'

const LoginPage = loadable(() => import('./+login'), {
  fallback: <Loader />,
})

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </Router>
  )
}
