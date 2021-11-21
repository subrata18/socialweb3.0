import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ViewStyle,
  StyleProp,
} from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";
export interface MessageTestProps {
  message: string;
  style?: StyleProp<ViewStyle>;
}
const MessageText = ({ message, style }: MessageTestProps) => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.textContainer}>{message}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  textContainer: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 3,
    //didnot get text background color
    backgroundColor: "#EBE8FB",
  },
});

export default MessageText;
