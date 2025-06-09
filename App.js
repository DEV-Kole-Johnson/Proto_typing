//Screens
import  homeScreen  from './screens/homeScreen.js';

// Componet Imports
import HamburgerMenu from './components/HamburgerMenu.js';

//Libary Imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

//Style Imports
import * as css from "./styles.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: css.colors.lime_green, 
              paddingBottom: 10,
              borderTopWidth: 0,
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
            },
            tabBarActiveTintColor: css.colors.dark_blue,
            tabBarInactiveTintColor: 'white',
          }}
        >
        <Tab.Screen
          name="Home"
          component={homeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
            title: 'Home Screen',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: css.colors.lime_green,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="Game"
          component={HamburgerMenu}
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
