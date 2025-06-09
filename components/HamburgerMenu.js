import React from 'react';
import TicTacToe from './TicTacToe.js';
import Chess from './Chess.js';
import Sudoku from './Sudoku.js';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function HamburgerMenu() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="TicTacToe" component={TicTacToe} />
      <Drawer.Screen name="Chess" component={Chess} />
      <Drawer.Screen name="Sudoku" component={Sudoku} />
    </Drawer.Navigator>
  );
}