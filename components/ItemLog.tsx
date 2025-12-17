import Colors from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

const ItemLog = ({ item, index }: { item: number; index: number }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Guess #{index}</Text>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );
};

export default ItemLog;
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.dark,
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: Colors.secondary,
    marginVertical: 4,
  },
  itemText: {
    color: Colors.white,
  },
});
