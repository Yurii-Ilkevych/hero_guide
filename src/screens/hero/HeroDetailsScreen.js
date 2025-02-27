import { Text, View, StyleSheet } from "react-native"

export default function HeroDetailsScreen() {
    return (
        <View style={styles.container}>
            <Text>This is HeroDetailsScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },

})