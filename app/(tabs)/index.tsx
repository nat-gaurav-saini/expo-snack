import { StyleSheet, TouchableHighlight, View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => router.push("/category")}
        underlayColor="#DDDDDD"
      >
        <View>
          <Text style={styles.buttonText}>Go to Category</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        onPress={() => router.push("/category/sports")}
        underlayColor="#DDDDDD"
      >
        <View>
          <Text style={styles.buttonText}>Go to Sports Category</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.button}
        onPress={() => router.push("/category/sports/football")}
        underlayColor="#DDDDDD"
      >
        <View>
          <Text style={styles.buttonText}>Go to Football Collection</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});
