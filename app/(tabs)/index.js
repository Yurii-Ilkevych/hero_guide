import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you ready to watch your favorite characters?</Text>
      <Link style={styles.button} href="/main-screen">Click to view</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#975544'
  },
  button: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: 'red'
  },
  text: {
    fontSize: 16,
    marginBottom: 8
  }
})