import './App.css';
import Header from './components/Header';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <TicTacToe/>
      </div>
    </div>
  );
}

export default App;
