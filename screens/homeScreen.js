import { View, Text } from 'react-native';

import { homes, styles } from '../styles.js';


export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text style={homes.text}>Hi Welcome to GameMaster</Text>
    </View>
  );
}