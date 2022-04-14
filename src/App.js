import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Nav from './pages/Nav'
import Info from './components/Info'
import JobPage from './pages/JobPage'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/job/" element={<JobPage />} />
        </Routes>
      </main>
      <footer>
        <Info />
      </footer>
    </div>
  )
}

export default App
