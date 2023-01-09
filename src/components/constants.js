export const FIGURES = {
  CIRCLE: 'circle',
  CROSS: 'cross',
};

export const GAME_RESULT = {
  ...FIGURES,
  DRAW: 'draw',
};

export const GAME_MODES = {
  WITH_BOT: 'withBot',
  TWO_PLAYERS: 'twoPlayers',
};

export const DEFAULT_FORM_SETUP = {
  mode: GAME_MODES.WITH_BOT,
  player1Name: 'Player',
  player2Name: 'Bot',
  player1Shape: FIGURES.CIRCLE,
  player2Shape: FIGURES.CROSS,
  player1Color: '#FF0000',
  player2Color: '#FFC0CB',
};

export const FORM_KEYS = {
    MODE: 'mode',
    PLAYER1_NAME: 'player1Name',
    PLAYER2_NAME: 'player2Name',
    PLAYER1_SHAPE: 'player1Shape',
    PLAYER2_SHAPE: 'player2Shape',
    PLAYER1_COLOR: 'player1Color',
    PLAYER2_COLOR: 'player2Color',
};
