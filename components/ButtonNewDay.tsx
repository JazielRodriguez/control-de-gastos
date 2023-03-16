import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function ButtonNewDay() {
  return (
    <View style={styles.button}>
      <Text style={styles.alignItemsButton}>
        <Text>Nuevo dia</Text>{" "}
        <AntDesign name="rightcircle" size={24} color="black" />
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#851eb0",
    borderRadius: 10,
    textAlign: "center",
    padding: 10,
    fontSize: 18,
  },
  alignItemsButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
