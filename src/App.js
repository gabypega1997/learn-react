import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Acest header este cel care apare pe mijlocul paginii 
          Poti sa adaugi tu ce vrei in div-ul acesta , header nu e necesar
      */}
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
