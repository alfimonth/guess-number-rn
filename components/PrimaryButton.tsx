import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type PrimaryButtonProps = {
  children: ReactNode;
  onPress: () => void;
};

const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {
  return (
    <View style={styles.outerButton}>
      <Pressable onPress={onPress} style={styles.innerButton}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerButton: {
    backgroundColor: "darkblue",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 99,
  },
  innerButton: {},
  buttonText: {
    color: 'ghostwhite'
  },
});
