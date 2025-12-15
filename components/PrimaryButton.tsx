import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type PrimaryButtonProps = {
  children: ReactNode;
  onPress: () => void;
};

const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {
  return (
    <View style={styles.outerButton}>
      <Pressable
        android_ripple={{ color: "blue" }}
        onPress={onPress}
        style={({ pressed }) => [styles.innerButton, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerButton: {
    borderRadius: 99,
    overflow: "hidden",
    flex: 1,
  },

  innerButton: {
    backgroundColor: "darkblue",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  pressed: {
    backgroundColor: "blue",
    opacity: 0.75,
  },

  buttonText: {
    color: "ghostwhite",
    fontWeight: "600",
  },
});
