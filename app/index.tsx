import Colors from "@/constants/colors";
import GameScreen from "@/screens/GameScreen";
import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [pickedNumber, setPickedNumber] = useState<number | undefined>();

  const pickedNumberHandler = (number: number) => {
    setPickedNumber(number);
  };

  let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;
  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} />;
  }
  return (
    <LinearGradient
      colors={[Colors.secondary, Colors.primary, Colors.white]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  },
});
