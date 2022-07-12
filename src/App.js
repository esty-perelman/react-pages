import logo from './logo.svg';
import './App.css';
import LoadJson from './Components/LoadJson/LoadJson.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadJson></LoadJson>
        <p>hello to my-react :)</p>
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
