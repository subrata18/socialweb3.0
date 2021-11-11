import React from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MediumText, RegularText } from "../utility/ui/appText";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const SolidButton = ({ onPress, title, style }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[style]}>
      <SafeAreaView edges={[]} style={[styles.button]}>
        <MediumText style={[styles.buttonTitle]}>{title}</MediumText>
      </SafeAreaView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonTitle: {
    fontSize: 14,
    color: "white",
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    backgroundColor: "#3F71F2",
    borderRadius: 4,
  },
});

export default SolidButton;
