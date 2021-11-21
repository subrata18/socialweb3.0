import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SIZE_REF_10,
  SIZE_REF_12,
  SIZE_REF_14,
  SIZE_REF_16,
  SIZE_REF_8,
  WINDOW_HEIGHT,
} from "../../utility/constants";
import { MediumText } from "../../utility/ui";
import Icon from "../global/Icon";

const ImageFeedScreenHeader = ({
  layout,
  navigation,
  options,
  route,
}: BottomTabHeaderProps) => {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={[styles.header]}>
      <MediumText style={[styles.headerText]}>Social</MediumText>
      <SafeAreaView edges={[]} style={[styles.iconWrapper]}>
        <Icon
          name="search-bold"
          color="black"
          size={SIZE_REF_12 + SIZE_REF_14}
          style={styles.searchIcon}
        />
        <Icon
          name="plus-outline"
          color="black"
          size={SIZE_REF_12 + SIZE_REF_14}
          style={styles.plusIcon}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FDFDFD",
    width: "100%",
    height: 0.1 * WINDOW_HEIGHT,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZE_REF_8,
    borderBottomColor: "#D1CBCB",
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: SIZE_REF_10 * 2,
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchIcon: { marginRight: SIZE_REF_16 },
  plusIcon: { marginRight: SIZE_REF_8 },
});

export default ImageFeedScreenHeader;
