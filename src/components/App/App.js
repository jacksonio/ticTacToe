import './App.css';
import { Field } from '../Field';
import { useState } from 'react';
import { SetupForm } from '../SetupForm';

export function App() {
  const [setup, setSetup] = useState(null);

  return (
    <div className="App">
      {!setup && (<SetupForm setSetup={setSetup}/>)}
      {setup && (<Field setup={setup} setSetup={setSetup}/>)}
    </div>
  );
}


