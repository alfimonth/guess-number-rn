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
    borderWidth: 2,
    alignItems: "center",
    paddingVertical: 4,
    alignSelf: "stretch",
    borderColor: Colors.white,
    marginBottom: 32,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 32,
    color: Colors.white,
  },
});
