// Libary Imports
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Componet Imports
import TicTacToe from './TicTacToe.js';
import Chess from './Chess.js';
import Sudoku from './Sudoku.js';

// Style Imports
import { styles, drawers } from '../styles.js';


const Drawer = createDrawerNavigator();

export default function HamburgerMenu() {
  return (
        <Drawer.Navigator 
            screenOptions={{
                drawerPosition: 'right',
                drawerLabelStyle: {
                    color: 'black',
                    fontSize: 20,
                    fontFamily: 'myriad-pro ,sans-serif',
                },
                drawerType: 'slide',
            }}
        >
        <Drawer.Screen name="TicTacToe" component={TicTacToe} />
        <Drawer.Screen name="Chess" component={Chess} />
        <Drawer.Screen name="Sudoku" component={Sudoku} />
        </Drawer.Navigator>
  );
}