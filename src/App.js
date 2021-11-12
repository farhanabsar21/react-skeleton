import './App.scss';
import Posts from './Components/Posts';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <header className="p1 bg-primary text">
        <div className="container">
          <h1 className="bold uppercase">React skeleton practice</h1>
        </div>
      </header>
      <div className="container p1">
        <div className="grid grid-2-1">
          <Posts />
          <User />
        </div>
      </div>
    </div>
  );
}

export default App;
