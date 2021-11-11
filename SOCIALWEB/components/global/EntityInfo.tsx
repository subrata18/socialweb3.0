import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GAP_SIZE_REF_4,
  USER_INFO_PRIMARY_TEXT_SIZE,
  USER_INFO_SECONDARY_TEXT_SIZE,
} from "../../utility/constants/appConstants";
import { globalColors } from "../../utility/style/colors";
import { EntityInfoProps } from "../../utility/types/other_types";
import { MediumText, RegularText } from "../../utility/ui/appText";
import RoundedIcon from "../RoundedIcon";
import Avatar from "./Avatar";

const EntityInfo = ({
  primaryText,
  secondaryText,
  name,
  size,
  style,
  url,
}: EntityInfoProps) => {
  console.log("rendered");
  return (
    <SafeAreaView
      edges={[]}
      style={[
        globalColors.userInfoContainerColor,
        styles.userInfoContainer,
        style,
      ]}
    >
      {url ? (
        <Avatar size={size ? size : 24} url={url} />
      ) : (
        <RoundedIcon
          name={name!}
          color="black"
          size={size!}
          dragEnabled={false}
          tapEnabled={false}
        />
      )}
      <SafeAreaView edges={[]} style={[styles.textContainer]}>
        <MediumText
          style={[globalColors.userInfoPrimaryTextColor, styles.primaryText]}
        >
          {primaryText}
        </MediumText>
        <RegularText
          style={[
            globalColors.userInfoSecondaryTextColor,
            styles.secondaryText,
          ]}
        >
          {secondaryText}
        </RegularText>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: GAP_SIZE_REF_4,
  },
  primaryText: {
    fontSize: USER_INFO_PRIMARY_TEXT_SIZE,
  },
  secondaryText: {
    fontSize: USER_INFO_SECONDARY_TEXT_SIZE,
  },
});

export default EntityInfo;
