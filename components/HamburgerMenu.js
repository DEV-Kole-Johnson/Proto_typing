import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { hamburger } from '../styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TicTacToe from './TicTacToe';
/* import Chess from '../screens/chessScreen';
import Sudoku from '../screens/sudokuScreen';
*/
const Stack = createNativeStackNavigator();


export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={hamburger.hamburgerContainer}>
      <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={hamburger.hamburger}>
        <View style={hamburger.hamburgerLine} />
        <View style={hamburger.hamburgerLine} />
        <View style={hamburger.hamburgerLine} />
      </TouchableOpacity>

      {menuOpen && (
        <View style={hamburger.menu}>
          <Stack.Navigator >
            <Stack.Screen name="TicTacToe" component={TicTacToe} />
          </Stack.Navigator>
        </View>
      )}
    </View>
  );
};
