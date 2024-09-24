import logo from './logo.svg';
// import jp_logo from '../public/jp_logo.png'

import './App.css';

function App() {
  return (
    <div className="App">
     {/* We could also use our new app headers from our css file */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button> Get Started</button>
        {/* <img src={jp_logo} alt="My Logo"/> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h1>Welcome to My Portfolio</h1>
          <p>This is my custom React portfolio site.</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
