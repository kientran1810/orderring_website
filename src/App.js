import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import AboutUs from './About_Us_Page/AboutUs.js';
import Order from './Order_Page/Order.js';


function Settings(){
  return <h2>Settings</h2>;
}

function ContactUs(){
  return <h2>Contact Us</h2>;
}

function App() {
  const [tab, setTab]=useState("aboutUs");
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header section-primary">
            <nav>
              <div className='leftPart'>
                <img src="/aha_logo/aha_logo_cafe.png" alt="Logo" className="App-logo m-2"/>
                <h1 id='cafeName' className="text-3xl m-2">Aha Cafe</h1>
              </div>
              <ul className='text-xl'>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li className="button-primary "><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/about-us" element={<AboutUs/>}/>
              <Route path="/order" element={<Order/>}/>
              <Route path="/settings" element={<Settings/>}/>
              <Route path="/contact-us" element={<ContactUs/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
