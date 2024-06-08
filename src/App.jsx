import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Home from '@pages/home/Home';
import Contact from './pages/home/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App