import Colors from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

const Title = ({ text }: { text: string }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 4,
    borderColor: Colors.white,
    marginBottom: 20,
    width: "100%",
  },
  title: {
    fontSize: 32,
    color: Colors.white,
  },
});
