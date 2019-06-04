const WHITE = '#ffffff';
const BLACK = '#111111';

const neutral = Object.freeze({
  WHITE,
  GRAY_1: '#E0E1E5',
  GRAY_2: '#999999',
  GRAY_3: '#979AA6',
  GRAY_4: '#73757F',
  GRAY_5: '#5B5E6D',
  GRAY_6: '#666666',
  GRAY_7: BLACK,
  GRAY_8: 'rgba(249, 249, 249, 0.5)',
  GRAY_9: '#0f214c',
  SHADOW: 'rgba(91, 91, 91, 0.06)',
  MODAL_SHADOW: 'rgba(91, 91, 91, 0.5)',
  BACKGROUND: '#F9F9F9',
  BLACK,
});

const brand = Object.freeze({
  PRIMARY: '#1C3F8E',
  PRIMARY_LIGHT: '#1B3E8E',
  PRIMARY_DARK: '#142E67',
  GOLD: '#C09F69',
  ERROR: '#A5727A',
  SUCCESS: '#0ABF8F',
});

export default Object.freeze({ WHITE, BLACK, brand, neutral });
