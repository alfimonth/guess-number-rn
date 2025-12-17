import Colors from "@/constants/colors";
import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

const TipsText = ({ children }: { children: ReactNode }) => (
  <Text style={styles.title}>{children}</Text>
);

export default TipsText;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: Colors.white,
    textAlign: "center",
    margin: 12,
  },
});
