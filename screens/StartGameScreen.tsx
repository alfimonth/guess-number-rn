import Card from "@/components/Card";
import Title from "@/components/MainTitle";
import PrimaryButton from "@/components/PrimaryButton";
import Colors from "@/constants/colors";
import { warningAlert } from "@/utils/alert";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

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
    <>
      <Title text="Guess My Number" />
      <Card>
        <Text>Input a number</Text>
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
      </Card>
    </>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
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
