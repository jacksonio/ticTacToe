import React, { useState } from 'react';
import { DEFAULT_FORM_SETUP, FIGURES, FORM_KEYS, GAME_MODES } from '../constants';
import './SetupForm.css';

export const SetupForm = ({setSetup}) => {
  const [config, setConfig] = useState(DEFAULT_FORM_SETUP);

  const onConfigSetupDone = (e) => {
    e.preventDefault();
    setSetup(config);
  };

  const onPropertyChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === FORM_KEYS.PLAYER1_SHAPE) {
      const isCircle = value === FIGURES.CIRCLE;

      isCircle ? setConfig((prev) => ({
        ...prev, player1Shape: FIGURES.CIRCLE, player2Shape: FIGURES.CROSS
      })) : setConfig((prev) => ({
        ...prev, player1Shape: FIGURES.CROSS, player2Shape: FIGURES.CIRCLE
      }));

      return;
    }

    setConfig((prev) => ({...prev, [name]: value}));
  };

  const isSubmitDisabled = !config.player1Name || !config.player2Name;

  return (<div className={'formWrapper'}>
    <form
      className="form"
      onSubmit={onConfigSetupDone}
    >
      <label
        className={'formItem'}
        htmlFor={FORM_KEYS.MODE}
      >
        Mode:
        <select
          onChange={onPropertyChange}
          id={FORM_KEYS.MODE}
          name={FORM_KEYS.MODE}
        >
          <option value={GAME_MODES.WITH_BOT}>With Bot</option>
          <option value={GAME_MODES.TWO_PLAYERS}>Two players</option>
        </select>
      </label>
      <label
        className={'formItem'}
        htmlFor={FORM_KEYS.PLAYER1_NAME}
      >
        Player 1 name:
        <input
          onChange={onPropertyChange}
          id={FORM_KEYS.PLAYER1_NAME}
          name={FORM_KEYS.PLAYER1_NAME}
          value={config.player1Name}
        />
      </label>
      <label
        className={'formItem'}
        htmlFor={FORM_KEYS.PLAYER2_NAME}
      >
        Player 2 name:
        <input
          onChange={onPropertyChange}
          id={FORM_KEYS.PLAYER2_NAME}
          name={FORM_KEYS.PLAYER2_NAME}
          value={config.player2Name}
        />
      </label>
      <label
        className={'formItem'}
        htmlFor={FORM_KEYS.PLAYER1_SHAPE}
      >
        Player 1 shape:
        <select
          onChange={onPropertyChange}
          id={FORM_KEYS.PLAYER1_SHAPE}
          name={FORM_KEYS.PLAYER1_SHAPE}
        >
          <option value={FIGURES.CIRCLE}>Circle</option>
          <option value={FIGURES.CROSS}>Cross</option>
        </select>
      </label>
      <label
        className={'formItem'}
        htmlFor={FORM_KEYS.PLAYER1_COLOR}
      >
        Player 1 color:
        <input
          onChange={onPropertyChange}
          id={FORM_KEYS.PLAYER1_COLOR}
          name={FORM_KEYS.PLAYER1_COLOR}
          type={'color'}
          value={config.player1Color}
        />
      </label>
      <label
        className={'formItem'}
        htmlFor={FORM_KEYS.PLAYER2_COLOR}
      >
        Player 2 color:
        <input
          onChange={onPropertyChange}
          id={FORM_KEYS.PLAYER2_COLOR}
          name={FORM_KEYS.PLAYER2_COLOR}
          type={'color'}
          value={config.player2Color}
        />
      </label>
      <button
        onClick={onConfigSetupDone}
        className={'submitButton'}
        disabled={isSubmitDisabled}
        type="submit"
      >
        Start game
      </button>
    </form>
  </div>);
};
