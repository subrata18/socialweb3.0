import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FONT_SIZE_REF_12,
  FONT_SIZE_REF_14,
} from "../utility/constants/appConstants";
import { RegularText, MediumText } from "../utility/ui/appText";
import Avatar from "./global/Avatar";

const AvatarUserIdPair = () => {
  //renders the avatar socialid and username as a group
  return (
    <SafeAreaView edges={[]} style={[styles.container]}>
      <Avatar size={56} url="https://source.unsplash.com/random" />
      <MediumText style={[styles.primaryText]}>roybond007</MediumText>
      <RegularText style={[styles.secondaryText]}>subham</RegularText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  primaryText: {
    fontSize: FONT_SIZE_REF_14,
  },
  secondaryText: {
    fontSize: FONT_SIZE_REF_12,
    alignSelf: "flex-start",
  },
});

export default AvatarUserIdPair;
