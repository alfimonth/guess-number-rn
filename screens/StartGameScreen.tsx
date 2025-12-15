import PrimaryButton from "@/components/PrimaryButton";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const StartGameScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "ghostwhite",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  inputContainer: {
    width: "100%",
    marginTop: 64,
    backgroundColor: "lightskyblue",
    borderRadius: 8,
    padding: 12,

    // android
    elevation: 4,

    // ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },

  numberInput: {
    color: "blue",
    fontSize: 32,
    borderBottomColor: "blue",
    borderBottomWidth: 2,
    width: 50,
    height: 50,
    marginVertical: 12,
    textAlign: "center",
    fontWeight: '700'
  },
});
