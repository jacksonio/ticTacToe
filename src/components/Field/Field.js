import React, { useCallback, useEffect, useState } from 'react';
import './Field.css';
import { Tile } from '../Tile';
import { useGameResult } from '../../hooks/useGameResult';
import { GameResults } from '../GameResults';
import { createNewField } from '../helpers';

export const Field = ({setup, setSetup}) => {
  const {player1Shape, player2Shape, player1Name, player2Name, player1Color, player2Color, mode} = setup;

  const [turn, setTurn] = useState(1);
  const [field, setTileFilledByType] = useState(createNewField());

  const gameState = useGameResult(field);

  useEffect(() => {
    if (mode === 'withBot' && !gameState && turn > 0 && turn % 2 === 0) {
      function getFreeTile() {
        const id = `#tile${~~(Math.random() * 9)}`;

        const tileCandidate = document.body.querySelector(id);

        if (!tileCandidate.classList.contains('clickDisabled')) {
          setTimeout(() => tileCandidate.click(), 150);
        } else {
          getFreeTile();
        }
      }

      getFreeTile();
    }
  }, [gameState, mode, turn]);

  const onTileSelect = useCallback((tileId) => {
    const newFilledTile = turn % 2 === 1
      ? {tileType: player1Shape, tileColor: player1Color}
      : {tileType: player2Shape, tileColor: player2Color};

    setTileFilledByType((prevState) => prevState.map(
      tile => tile.tileId === tileId
        ? {...tile, ...newFilledTile}
        : tile
    ));

    setTurn(prev => prev + 1);
  }, [player1Color, player1Shape, player2Color, player2Shape, turn]);

  return !gameState
    ? (
      <div className="fieldWrapper">
        <div className="fieldBorder">
          {field.map(({tileId, tileType, tileColor}) => (<Tile
            onTileSelect={onTileSelect}
            tileId={tileId}
            tileType={tileType}
            tileColor={tileColor}
            key={tileId}
          />))}
        </div>
      </div>
    )
    : <GameResults
      gameState={gameState}
      player1Shape={player1Shape}
      player2Shape={player2Shape}
      player2Name={player2Name}
      player1Name={player1Name}
      setSetup={setSetup}
      setTileFilledByType={setTileFilledByType}
      setTurn={setTurn}
    />;
};

