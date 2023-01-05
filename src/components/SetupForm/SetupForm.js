import React, { useState } from 'react';
import './SetupForm.css';

export const SetupForm = ({setSetup}) => {

  const [config, setConfig] = useState({
    mode: 'withBot',
    player1Name: 'Player',
    player2Name: 'Bot',
    player1Shape: 'circle',
    player2Shape: 'cross',
    player1Color: '#FF0000',
    player2Color: '#FFC0CB',
  });

  const onConfigSetupDone = (e) => {
    e.preventDefault();
    setSetup(config);
  };

  const onPropertyChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'player1Shape') {
      const isCircle = value === 'circle';

      isCircle
        ? setConfig((prev) => ({
          ...prev,
          player1Shape: 'circle',
          player2Shape: 'cross'
        }))
        : setConfig((prev) => ({
          ...prev,
          player1Shape: 'cross',
          player2Shape: 'circle'
        }));
      return;
    }

    setConfig((prev) => ({...prev, [name]: value}));
  };

  const isSubmitDisabled = !config.player1Name || !config.player2Name;

  return (
    <div className={'formWrapper'}>
      <form className="form" onSubmit={onConfigSetupDone}>
        <label className={'formItem'} htmlFor="mode">
          Mode:
          <select onChange={onPropertyChange} id="mode" name="mode">
            <option value="withBot">With Bot</option>
            <option value="twoPlayers">Two players</option>
          </select>
        </label>
        <label className={'formItem'} htmlFor="player1Name">
          Player 1 name:
          <input onChange={onPropertyChange} id="player1Name" name="player1Name" value={config.player1Name}/>
        </label>
        <label className={'formItem'} htmlFor="player2Name">
          Player 2 name:
          <input onChange={onPropertyChange} id="player2Name" name="player2Name" value={config.player2Name}/>
        </label>
        <label className={'formItem'} htmlFor="player1Shape">
          Player 1 shape:
          <select onChange={onPropertyChange} id="player1Shape" name="player1Shape">
            <option value="circle">Circle</option>
            <option value="cross">Cross</option>
          </select>
        </label>
        <label className={'formItem'} htmlFor="player1Color">
          Player 1 color:
          <input onChange={onPropertyChange} id="player1Color" name="player1Color" type={'color'} value={config.player1Color}/>
        </label>
        <label className={'formItem'} htmlFor="player2Color">
          Player 2 color:
          <input onChange={onPropertyChange} id="player2Color" name="player2Color" type={'color'} value={config.player2Color}/>
        </label>
        <button onClick={onConfigSetupDone} className={'submitButton'} disabled={isSubmitDisabled} type="submit">Start
          game
        </button>
      </form>
    </div>
  );
};
