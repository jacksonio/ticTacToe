export function useGameResult(field) {
  const tileTypes = field.map(tile => tile.tileType);

  //horizontal
  const topRowSameFilled = tileTypes[0] && (tileTypes[0] === tileTypes[1]) && (tileTypes[0] === tileTypes[2]) && tileTypes[0];
  const middleRowSameFilled = tileTypes[3] && (tileTypes[3] === tileTypes[4]) && (tileTypes[3] === tileTypes[5]) && tileTypes[3];
  const bottomRowSameFilled = tileTypes[6] && (tileTypes[6] === tileTypes[7]) && (tileTypes[6] === tileTypes[8]) && tileTypes[6];

  //vertical
  const leftColumnSameFilled = tileTypes[0] && (tileTypes[0] === tileTypes[3]) && (tileTypes[0] === tileTypes[6]) && tileTypes[0];
  const middleColumnSameFilled = tileTypes[1] && (tileTypes[1] === tileTypes[4]) && (tileTypes[1] === tileTypes[7]) && tileTypes[1];
  const rightColumnSameFilled = tileTypes[2] && (tileTypes[2] === tileTypes[5]) && (tileTypes[2] === tileTypes[8]) && tileTypes[2];

  //cross
  const leftToRightCross = tileTypes[0] && (tileTypes[0] === tileTypes[4]) && (tileTypes[0] === tileTypes[8]) && tileTypes[0];
  const rightToLeftCross = tileTypes[2] && (tileTypes[2] === tileTypes[4]) && (tileTypes[2] === tileTypes[6]) && tileTypes[2];

  const isDraw = tileTypes.filter(type => type).length === tileTypes.length && 'draw';
  return topRowSameFilled || middleRowSameFilled || bottomRowSameFilled
    || leftColumnSameFilled || middleColumnSameFilled || rightColumnSameFilled
    || leftToRightCross || rightToLeftCross
    || isDraw;
}
