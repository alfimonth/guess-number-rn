import Card from "@/components/Card";
import ItemLog from "@/components/ItemLog";
import Title from "@/components/MainTitle";
import PrimaryButton from "@/components/PrimaryButton";
import TipsText from "@/components/TipsText";
import Colors from "@/constants/colors";
import { generateRandomBetween } from "@/utils/number";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";

let minGuessBoundary = 1;
let maxGuessBoundary = 99;

const GameScreen = ({
  userNumber,
  onGameOver,
}: {
  userNumber: number;
  onGameOver: (rounds: number) => void;
}) => {
  const initialGuess = generateRandomBetween(1, 99, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [logNumbers, setLogNumbers] = useState<number[]>([
    initialGuess as number,
  ]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(logNumbers.length);
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
    setLogNumbers((prev) => [...prev, newGuess as number]);

    setCurrentGuess(newGuess);
  };
  return (
    <>
      <Title text="Opponent's Guess" />
      <View style={styles.guessContainer}>
        <Text style={styles.guesText}>{currentGuess}</Text>
      </View>
      <Card>
        <TipsText>Higher or Lower?</TipsText>
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
      <FlatList
        style={styles.listContainer}
        data={logNumbers}
        inverted
        renderItem={({ item, index }) => (
          <ItemLog item={item} index={index + 1} />
        )}
      />
    </>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
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
  listContainer: {
    alignSelf: "stretch",
    margin: 24,
  },
});
