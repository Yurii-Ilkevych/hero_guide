import { Text, View, StyleSheet } from "react-native"

export default function MainScreen() {

    return (
        <View style={styles.container}>
            <Text>This is MainScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

})