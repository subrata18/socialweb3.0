import React from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundedIcon from "./RoundedIcon";
import Avatar from "./Avatar";
import { EntityInfoProps } from "../../utility/types";
import { globalColors } from "../../utility/styles";
import { MediumText, RegularText } from "../../utility/ui";
import { SIZE_REF_10, SIZE_REF_12, SIZE_REF_4 } from "../../utility/constants";

const EntityInfo = ({
  primaryText,
  secondaryText,
  name,
  size,
  style,
  url,
}: EntityInfoProps) => {
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
        <RoundedIcon name={name!} color="black" size={size!} scale={0.7} />
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
    marginLeft: SIZE_REF_4,
  },
  primaryText: {
    fontSize: SIZE_REF_12,
  },
  secondaryText: {
    fontSize: SIZE_REF_10,
  },
});

export default EntityInfo;
