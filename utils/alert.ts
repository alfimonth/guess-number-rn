import { Alert } from "react-native";

const warningAlert = (title: string, message: string, onConfirm?: () => void) =>
  Alert.alert(title, message, [
    {
      text: "Okay",
      style: "destructive",
      onPress: onConfirm,
    },
  ]);

export { warningAlert };
