import PrimaryButton from "@/components/PrimaryButton";
import Colors from "@/constants/colors";
import { warningAlert } from "@/utils/alert";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const StartGameScreen = ({
  onConfirmNumber,
}: {
  onConfirmNumber: (number: number) => void;
}) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const confirmHandler = () => {
    if (enteredNumber === "") {
      invalidNumberAlert("Number connot be empty");
      return;
    }

    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber)) {
      invalidNumberAlert("Chosen number must be a number");
      return;
    }

    if (chosenNumber <= 0) {
      invalidNumberAlert("Chosen number must be higher than 0");
      return;
    }

    if (chosenNumber >= 100) {
      invalidNumberAlert("Chosen number cannot be higher than 99");
      return;
    }

    onConfirmNumber(chosenNumber);
  };

  const invalidNumberAlert = (text: string) => {
    warningAlert("Invalid Number", text, resetHandler);
  };

  const resetHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={setEnteredNumber}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 24,
    marginTop: 64,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: "center",

    // android
    elevation: 4,

    // ios
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.35,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },

  numberInput: {
    color: Colors.secondary,
    fontSize: 32,
    borderBottomColor: Colors.dark,
    borderBottomWidth: 2,
    width: 50,
    height: 50,
    marginVertical: 12,
    textAlign: "center",
    fontWeight: "700",
  },
});
