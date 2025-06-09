//Screens
import  homeScreen  from './screens/homeScreen.js';
import  gameStackScreen  from './screens/ticTacToeScreen.js';

//Libary Imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

//Style Imports
import { styles, tabs } from './styles';

const Tab = createBottomTabNavigator();

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
          component={gameStackScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="sports-esports" color={color} size={size} />
            ),
          }}
        />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
