import { View, Text } from "react-native";
import { styles, homes } from "../styles";

export default function Chess() {
    return (
        <View style={styles.container}>
            <Text style={homes.text}>WELCOME TO CHESS</Text>
        </View>
    );
}