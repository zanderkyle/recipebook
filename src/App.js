import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    
    <div className="App">
    <Router>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React1
        </a>
      </header>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit2 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React2
        </a>
      </header>
    </div>
  );
}

export default App;
