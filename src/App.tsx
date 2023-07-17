import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header.tsx';
import Home from './pages/Home.tsx';
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
