import Title from "@/components/MainTitle";
import PrimaryButton from "@/components/PrimaryButton";
import TipsText from "@/components/TipsText";
import Colors from "@/constants/colors";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GameOverScreen = ({
  onRestart,
  pickedNumber,
}: {
  onRestart: () => void;
  pickedNumber: number;
}) => {
  return (
    <>
      <Title text="Game Over" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <TipsText>
        Your Phone needed <Text style={styles.highlightText}>{0}</Text> rounds
        {"\n"}to guess the number{" "}
        <Text style={styles.highlightText}>{pickedNumber}</Text>
      </TipsText>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onRestart}>Start new Game</PrimaryButton>
      </View>
    </>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    overflow: "hidden",
    borderRadius: 999,
    borderWidth: 2,
    width: 200,
    height: 200,
    marginVertical: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    marginTop: 24,
    height: 100,
  },
  highlightText: {
    color: Colors.secondary,
    fontWeight: 700,
  },
});
