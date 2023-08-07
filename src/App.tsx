import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header.tsx';
import Home from './pages/Home.tsx';
import annual_report_2023 from './articles/annual-report-2023.ts';
import Blog from './pages/Blog.tsx';
import PageNotFound from './components/PageNotFound.tsx';
import "./App.css"
import Preview from './pages/Preview.tsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/annual-report-2023" element={<Preview text={annual_report_2023} />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  )
}

export default App
