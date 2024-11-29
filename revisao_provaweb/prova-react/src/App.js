import { useState } from 'react';
import MeuComponente from '../components/MeuComponente'; 
import './components/index.css'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      
      <MeuComponente /> {}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          
        </button>
        <p>
          
        </p>
      </div>
    </div>
  );
}

export default App;
