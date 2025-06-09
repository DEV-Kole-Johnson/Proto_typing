import { View, Text } from "react-native";
import HamburgerMenu from "../components/HamburgerMenu.js";
import { homes, styles } from '../styles.js';

export default function ticTacToeScreen() {
    return (
        <View style={styles.container}> 
            <HamburgerMenu />
            <Text style={homes.text}>WELCOME TO CHESS</Text>
        </View>
    );
};