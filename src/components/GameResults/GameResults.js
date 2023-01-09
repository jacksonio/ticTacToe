import React, { memo } from 'react';
import { createNewField, getGameResult } from '../../helpers';
import './GameResults.css';
import '../SetupForm/SetupForm.css';

export const GameResults = memo(({
                                   player1Name,
                                   player2Name,
                                   player1Shape,
                                   player2Shape,
                                   gameState,
                                   setSetup,
                                   setTileFilledByType,
                                   setTurn,
                                 }) => {

  const setNewGameWithCurrentSetup = () => {
    setTurn(1);
    setTileFilledByType(createNewField());
  };

  return (<div className="results">
    <div className="resultsText">
      {getGameResult([player1Name, player2Name], [player1Shape, player2Shape], gameState)}
    </div>
    <button onClick={setNewGameWithCurrentSetup} className="submitButton">New Game ( same setup )</button>
    <button onClick={() => setSetup(null)} className="submitButton">New Setup</button>
  </div>);
});
