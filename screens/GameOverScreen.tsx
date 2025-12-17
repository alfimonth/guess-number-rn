import Title from "@/components/MainTitle";
import TipsText from "@/components/TipsText";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GameOverScreen = () => {
  return (
    <>
      <Title text="Game Over" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <TipsText>Your Phone needed {0} rounds to guess the number {0}</TipsText>
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
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
