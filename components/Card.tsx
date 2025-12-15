import Colors from "@/constants/colors";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children }: { children: ReactNode }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 24,
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
});
