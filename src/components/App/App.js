import { Field } from '../Field';
import { useState } from 'react';
import { SetupForm } from '../SetupForm';
import './App.css';

export function App() {
  const [setup, setSetup] = useState(null);

  return (
    <div className="app">
      {!setup && (<SetupForm setSetup={setSetup}/>)}
      {setup && (<Field setup={setup} setSetup={setSetup}/>)}
    </div>
  );
}


