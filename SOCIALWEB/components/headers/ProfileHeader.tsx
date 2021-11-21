import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SIZE_REF_10,
  SIZE_REF_12,
  SIZE_REF_14,
  SIZE_REF_4,
} from "../../utility/constants";
import { globalColors, globalLayouts } from "../../utility/styles";
import { MediumText } from "../../utility/ui";
import Icon from "../global/Icon";

export interface HeaderProps {
  leftComponent?: ReactElement<any>;
  rightComponent?: ReactElement<any>;
  centerComponent?: ReactElement<any>;
}

const ProfileHeader = ({
  layout,
  navigation,
  options,
  route,
}: BottomTabHeaderProps) => {
  return (
    <SafeAreaView
      edges={["left", "right", "top"]}
      style={[
        globalLayouts.headerLayout,
        globalColors.headerColor,
        styles.header,
      ]}
    >
      <View style={styles.headerLeftWrapper}>
        <Icon
          color="black"
          name="user-outline"
          size={SIZE_REF_12 + SIZE_REF_14}
        />
        <MediumText style={styles.headerText}>roybond007</MediumText>
      </View>
      <Icon color="black" name="more-solid" size={SIZE_REF_12 + SIZE_REF_14} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: SIZE_REF_10 * 2,
    marginLeft: SIZE_REF_4,
  },
  headerLeftWrapper: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ProfileHeader;
