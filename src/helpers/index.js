import { GAME_RESULT } from '../components/constants';

export const getGameResult = (playerNames, playerShapes, gameResult) => ({
  [playerShapes[0]]: `${[playerNames[0]]} won the game`,
  [playerShapes[1]]: `${[playerNames[1]]} won the game`,
  [GAME_RESULT.DRAW]: 'It is a draw',
}[gameResult]);

export const createNewField = () => Array.from({length: 9}, (_, i) => ({
  tileId: i, tileType: null,
}));
