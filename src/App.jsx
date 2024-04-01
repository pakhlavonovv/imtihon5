import './App.css';
import { useState } from 'react';
const App = () => {
  const [mode, setMode] = useState(true)
  return (
    <div className="App">
      <header className={mode == true ? 'light' : 'dark'}>
    <h1>Header</h1>
    <button onClick={()=> setMode(true)}>
      Light
    </button>
      </header>
      <main className={mode == true ? 'light' : 'dark'}>
        <h1>HERO</h1>
      </main>
      <footer className={mode == true ? 'light' : 'dark'}>
        <h1>FOOTER</h1>
        <button onClick={()=> setMode(false)}>DARK</button>
      </footer>
    </div>
  );
}


export default App;
