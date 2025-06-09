import { View, Text } from 'react-native';

import { styles } from '../styles.js';


export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi Welcome to GameMaster</Text>
    </View>
  );
}