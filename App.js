//Screens
import  homeScreen  from './screens/homeScreen.js';

//Libary Imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TicTacToe from './components/TicTacToe.js';
import Chess from './components/Chess.js';
import Sudoku from './components/Sudoku.js';

//Style Imports
import { styles, tabs } from './styles';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="TicTacToe" component={TicTacToe} />
      <Drawer.Screen name="Chess" component={Chess} />
      <Drawer.Screen name="Sudoku" component={Sudoku} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#121212', 
              paddingBottom: 10,
              borderTopWidth: 0,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              color: '#ffffff',
            },
          }}
        >
        <Tab.Screen
          name="Home"
          component={homeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Game"
          component={MyDrawer}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="sports-esports" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
