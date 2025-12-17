import Card from "@/components/Card";
import ItemLog from "@/components/ItemLog";
import Title from "@/components/MainTitle";
import PrimaryButton from "@/components/PrimaryButton";
import TipsText from "@/components/TipsText";
import Colors from "@/constants/colors";
import { generateRandomBetween } from "@/utils/number";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";

const GameScreen = ({
  userNumber,
  onGameOver,
}: {
  userNumber: number;
  onGameOver: (rounds: number) => void;
}) => {
  const minBoundary = useRef(1);
  const maxBoundary = useRef(99);
  const initialGuess = generateRandomBetween(1, 99, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [logNumbers, setLogNumbers] = useState<number[]>([
    initialGuess as number,
  ]);

  useEffect(() => {
    minBoundary.current = 1;
    maxBoundary.current = 99;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(logNumbers.length);
    }
  }, [currentGuess]);

  const nextGuessHandler = (type: "higher" | "lower") => {
    if (currentGuess === userNumber) return;

    if (type === "lower") {
      if (currentGuess < userNumber) {
        Alert.alert("Don't lie!");
        return;
      }
      maxBoundary.current = currentGuess - 1;
    } else {
      if (currentGuess > userNumber) {
        Alert.alert("Don't lie!");
        return;
      }
      minBoundary.current = currentGuess + 1;
    }

    if (minBoundary.current > maxBoundary.current) {
      return; 
    }

    const newGuess = generateRandomBetween(
      minBoundary.current,
      maxBoundary.current,
      currentGuess
    );

    setLogNumbers((prev) => [...prev, newGuess]);
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
