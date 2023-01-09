import React from 'react';
import './Tile.css';
import cx from 'classnames';
import { FIGURES } from '../constants';

export const Tile = ({tileType, onTileSelect, tileId, tileColor}) => {
  const isCircle = tileType === FIGURES.CIRCLE;
  const isCross = tileType === FIGURES.CROSS;

  const onClickHandler = () => onTileSelect(tileId);
  const crossStyles = {
    position: 'absolute',
    content: '',
    background: tileColor,
    display: 'block',
    width: '60%',
    height: '10px',
    transform: 'rotate(-45deg)',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    margin: 'auto',
  };

  return (<div
    id={`tile${tileId}`}
    className={cx(`tile`, {clickDisabled: tileType})}
    onClick={onClickHandler}
  >
    {isCross && <div style={{...crossStyles, transform: 'rotate(-45deg)'}}/>}
    <div
      style={isCircle ? {border: `10px solid ${tileColor}`} : {}}
      className={cx({'tileCircle': isCircle, 'tileCross': isCross})}
    />
    {isCross && <div style={{...crossStyles, transform: 'rotate(45deg)'}}/>}
  </div>);
};
