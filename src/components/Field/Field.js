import React from 'react';
import './Field.css';
import { Tile } from '../Tile';

export const Field = () => {
  const tiles = Array.from({length: 9}, (_, i) => <Tile key={i}/>);
  return (
    <div className="fieldWrapper">
      <div className="fieldBorder">
        {tiles}
      </div>
    </div>
  );
};

