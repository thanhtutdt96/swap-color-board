import {createContext, useContext} from 'react';

const colorBoardArr = [
  {id: 1, color: '#FFCCCC'},
  {id: 2, color: '#FFE6CC'},
  {id: 3, color: '#FFFFCC'},
  {id: 4, color: '#E6FFCC'},
  {id: 5, color: '#CCFF99'},
  {id: 6, color: '#CCFFE7'},
  {id: 7, color: '#CCFFFF'},
  {id: 8, color: '#CCE5FF'},
  {id: 9, color: '#FF6666'},
  {id: 10, color: '#FFCC99'},
  {id: 11, color: '#FFFF99'},
  {id: 12, color: '#CCFF99'},
  {id: 13, color: '#99FF99'},
  {id: 14, color: '#99FFCD'},
  {id: 15, color: '#99FFFF'},
  {id: 16, color: '#99CCFF'},
  {id: 17, color: '#FF3333'},
  {id: 18, color: '#FFB366'},
  {id: 19, color: '#FFFF67'},
  {id: 20, color: '#B2FF66'},
  {id: 21, color: '#66FF66'},
  {id: 22, color: '#66FFB3'},
  {id: 23, color: '#66FFFF'},
  {id: 24, color: '#66B2FF'},
  {id: 25, color: '#FF3333'},
  {id: 26, color: '#FF9933'},
  {id: 27, color: '#FFFF33'},
  {id: 28, color: '#99FF32'},
  {id: 29, color: '#34FF32'},
  {id: 30, color: '#34FF99'},
  {id: 31, color: '#34FFFF'},
  {id: 32, color: '#3399FF'},
  {id: 33, color: '#FF0000'},
  {id: 34, color: '#FF8001'},
  {id: 35, color: '#FFFF00'},
  {id: 36, color: '#80FF00'},
  {id: 37, color: '#02FF00'},
  {id: 38, color: '#02FF81'},
  {id: 39, color: '#02FFFF'},
  {id: 40, color: '#027FFF'},
  {id: 41, color: '#CC0100'},
  {id: 42, color: '#CC6701'},
  {id: 43, color: '#CCCC02'},
  {id: 44, color: '#65CC02'},
  {id: 45, color: '#00CC00'},
  {id: 46, color: '#00CC66'},
  {id: 47, color: '#00CCCC'},
  {id: 48, color: '#0066CC'},
  {id: 49, color: '#990001'},
  {id: 50, color: '#994C01'},
  {id: 51, color: '#999900'},
  {id: 52, color: '#4D9900'},
  {id: 53, color: '#009900'},
  {id: 54, color: '#00994D'},
  {id: 55, color: '#009999'},
  {id: 56, color: '#004C99'},
  {id: 57, color: '#660000'},
  {id: 58, color: '#663300'},
  {id: 59, color: '#666600'},
  {id: 60, color: '#336600'},
  {id: 61, color: '#006601'},
  {id: 62, color: '#006633'},
  {id: 63, color: '#006666'},
  {id: 64, color: '#013366'}
];

export const defaultContext = {
  colorBoard: colorBoardArr
};

export const useAppContext = () => {
  return useContext(AppContext);
}

const AppContext = createContext(null);
export default AppContext;
