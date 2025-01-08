import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {useState} from 'react';
import './App.css';

function AboutUs(){
  return (
    <>
      <h2 className="text-4xl font-bold text-blue-500">Hehe</h2>
      <h2 className="text-4xl font-bold text-blue-500">Hehe</h2>
      <h2 className="text-4xl font-bold text-blue-500">Hehe</h2>
      <h2 className="text-4xl font-bold text-blue-500">Hehe</h2>
      <h2 className="text-4xl font-bold text-blue-500">Hehe</h2>
    </>);
}

function Order(){
  return <h2>Order</h2>;
}

function Settings(){
  return <h2>Settings</h2>;
}
function App() {
  const [tab, setTab]=useState("aboutUs");

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <img src="/aha_logo/aha_logo_cafe.png" alt="Logo" className="App-logo"/>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/order">Order</Link></li>
              <li><Link to="/Settings">Settings</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
