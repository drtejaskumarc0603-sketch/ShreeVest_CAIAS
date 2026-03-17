
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './landingpage/login/login';
import Signup from './landingpage/signup/signup';
import Home from './landingpage/home/home';
import About from './landingpage/about/about';
import Navbar from './Navbar';
import Footer from './Footer';
import Support from './landingpage/support/support';
//import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />

    </Routes>
    <Footer />
      </BrowserRouter>
);


