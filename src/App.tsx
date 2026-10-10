import { Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <nav>
        <Link to="/">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App