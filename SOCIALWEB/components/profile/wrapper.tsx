import React, { ReactElement } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

export interface WrapperProps {
  children: ReactElement<any> | ReactElement<any>[];
  style?: StyleProp<ViewStyle>;
}

export const RootWrapper = ({ children, style }: WrapperProps) => {
  return <View style={[styles.rootWrapper, style]}>{children}</View>;
};

export const MetaIconWrapper = ({ children, style }: WrapperProps) => {
  return <View style={[styles.metaIconWrapper, style]}>{children}</View>;
};

export const IconAndButtonWrapper = ({ children, style }: WrapperProps) => {
  return <View style={[styles.iconWrapper, style]}>{children}</View>;
};

export const MetaDataWrapper = ({ children, style }: WrapperProps) => {
  return <View style={[styles.metaDataWarpper, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  rootWrapper: {
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  metaIconWrapper: {
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  iconWrapper: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  metaDataWarpper: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
