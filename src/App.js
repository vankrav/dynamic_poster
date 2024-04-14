
import './App.css';
import Game from './components/Game';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header className="App-header" text = "Это пройдет"/>
      <Game height = {window.innerHeight} width ={window.innerWidth} cell = {5}/>
    </div>
  );
}

export default App;
