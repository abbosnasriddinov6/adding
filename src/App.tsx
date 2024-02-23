import Home from "./home/Home"
import './scss/main.scss'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Adding from "./components/Adding"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<Adding />} />
        </Routes>
      </Router>

    </>
  )
}

export default App