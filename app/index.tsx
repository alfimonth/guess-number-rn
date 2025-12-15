import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <LinearGradient
      colors={["darkblue", "lightskyblue", "ghostwhite"]}
      style={styles.mainContainer}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
