import { View, Text } from "react-native";
import { styles, homes } from "../styles";

export default function Sudoku() {
    return (
        <View style={styles.container}>
            <Text style={homes.text}>WELCOME TO SUDOKU</Text>
        </View>
    );
}