// Libary Imports
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Componet Imports
import TicTacToe from './TicTacToe.js';
import Chess from './Chess.js';
import Sudoku from './Sudoku.js';

// Style Imports
import * as sheet from "../styles.js";


const Drawer = createDrawerNavigator();

export default function HamburgerMenu() {
  return (
        <Drawer.Navigator 
            screenOptions={{
                drawerPosition: 'right',
                drawerLabelStyle: {
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'myriad-pro ,sans-serif',
                    textAlign: 'center',
                },
                drawerType: 'slide',
                headerStyle: {
                    backgroundColor: sheet.colors.lime_green,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                drawerItemStyle: {
                    backgroundColor: sheet.colors.dark_blue,
                    marginBottom: 10,

                },
                drawerStyle: {
                    backgroundColor: sheet.colors.op_lime_green,
                },
            }}
        >
        <Drawer.Screen name="TicTacToe" component={TicTacToe} />
        <Drawer.Screen name="Chess" component={Chess} />
        <Drawer.Screen name="Sudoku" component={Sudoku} />
        </Drawer.Navigator>
  );
}