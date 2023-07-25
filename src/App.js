import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Header/Home'
import About from './Components/Header/About'
import FAQ from './Components/Header/FAQ'
import Contact from './Components/Header/Contact'
import Shop from './Components/Main/Shop/Shop'
import Footer from './Components/Footer/Footer'
import Profile from './Components/Header/Profile';
import NotFound from './Components/Header/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About /> }  />
          <Route path="/faq" element={<FAQ /> }  />
          <Route path="/contact" element={<Contact /> }  />
          <Route path="/shop/:id" element={<Shop /> }  />
          <Route path="/profile" element={<Profile /> }  />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

<script src="https://kit.fontawesome.com/748e80ba5e.js" crossorigin="anonymous"></script>
export default App;
