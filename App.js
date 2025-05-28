//Screens
import gameScreen from './screens/gameScreen'; // adjust path if needed
import homeScreen from './screens/homeScreen';

//Libary Imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={homeScreen}/>
          <Tab.Screen name="Game" component={gameScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
