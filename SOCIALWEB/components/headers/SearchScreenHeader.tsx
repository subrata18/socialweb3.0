import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SIZE_REF_14,
  SIZE_REF_16,
  SIZE_REF_4,
  SIZE_REF_8,
} from "../../utility/constants";
import Icon from "../global/Icon";
import SearchBar from "../global/SearchBar";

const SearchScreenHeader = ({
  layout,
  navigation,
  options,
  route,
}: BottomTabHeaderProps) => {
  return (
    <SafeAreaView edges={["left", "right", "top"]} style={styles.header}>
      <Icon
        name="chevron-left"
        color="black"
        size={SIZE_REF_16 + SIZE_REF_14}
      />
      <SearchBar style={{ marginLeft: SIZE_REF_4 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FDFDFD",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZE_REF_8,
  },
});

export default SearchScreenHeader;
