import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/MainTitle";
import Colors from "@/constants/colors";
import { generateRandomBetween } from "@/utils/number";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

let minGuessBoundary = 1;
let maxGuessBoundary = 99;

const GameScreen = ({ userNumber }: { userNumber: number }) => {
  const initialGuess = generateRandomBetween(1, 99, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    console.log("Boundary: ", minGuessBoundary, " - ", maxGuessBoundary);
    if (currentGuess === userNumber) {
      Alert.alert("Game Over");
    }
  }, [currentGuess]);

  const nextGuessHandler = (type: "higher" | "lower") => {
    if (currentGuess === userNumber) return;
    if (type === "lower") {
      if ((currentGuess as number) < userNumber) {
        Alert.alert("You lie");
        return;
      }
      maxGuessBoundary = (currentGuess as number) - 1;
    } else {
      if ((currentGuess as number) > userNumber) {
        Alert.alert("You lie");
        return;
      }
      minGuessBoundary = (currentGuess as number) + 1;
    }
    const newGuess = generateRandomBetween(
      minGuessBoundary,
      maxGuessBoundary,
      currentGuess as number
    );

    setCurrentGuess(newGuess);
  };
  return (
    <View style={styles.mainContainer}>
      <Title text="Opponent's Guess" />
      <View style={styles.guessContainer}>
        <Text style={styles.guesText}>{currentGuess}</Text>
      </View>
      <Card>
        <Text>Higher or Lower?</Text>
        <View style={styles.bottomContainer}>
          <PrimaryButton
            onPress={() => {
              nextGuessHandler("lower");
            }}
          >
            <Ionicons name="remove-outline" size={20} />
          </PrimaryButton>
          <PrimaryButton
            onPress={() => {
              nextGuessHandler("higher");
            }}
          >
            <Ionicons name="add-outline" size={20} />
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  guessContainer: {
    alignItems: "center",
    padding: 12,
  },
  guesText: {
    fontSize: 64,
    color: Colors.white,
    fontWeight: 600,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 24,
  },
});
