import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SIZE_REF_14,
  SIZE_REF_16,
  SIZE_REF_2,
  SIZE_REF_6,
  SIZE_REF_8,
} from "../../utility/constants";
import { MediumText } from "../../utility/ui";
import Icon from "../global/Icon";

const TrendingScreenHeader = ({
  layout,
  navigation,
  options,
  route,
}: BottomTabHeaderProps) => {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.header}>
      <SafeAreaView edges={[]} style={styles.leftItem}>
        <Icon
          name="trending-outline"
          color="black"
          size={SIZE_REF_16 + SIZE_REF_14}
        />
        <MediumText style={styles.headerText}>most engaging</MediumText>
      </SafeAreaView>
      <Icon name="search-bold" color="black" size={SIZE_REF_16 + SIZE_REF_14} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZE_REF_8,
    backgroundColor: "#FDFDFD",
  },
  leftItem: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: SIZE_REF_6 * 3,
    marginLeft: SIZE_REF_2,
  },
});

export default TrendingScreenHeader;
