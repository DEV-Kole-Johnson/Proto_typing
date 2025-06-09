import { View } from "react-native";
import HamburgerMenu from "../components/HamburgerMenu.js";
import TicTacToe from "../components/TicTacToe.js";

export default function ticTacToeScreen() {
    return (
        <View> 
            <HamburgerMenu />
            <TicTacToe />
        </View>
    );
};