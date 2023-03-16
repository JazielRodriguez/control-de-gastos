import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import ButtonNewDay from "../components/ButtonNewDay";
export default function HomePage() {
  return (
    <View>
      <Text style={styles.heading}>Holaa, Empezamos un nuevo dia?</Text>
      <ButtonNewDay />
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
