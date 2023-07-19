import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header.tsx';
import Home from './pages/Home.tsx';
import Background from './pages/background.tsx';
import PageNotFound from './components/PageNotFound.tsx';
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/background" element={<Background />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  )
}

export default App
