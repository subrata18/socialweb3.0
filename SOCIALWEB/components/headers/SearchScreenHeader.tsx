import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GAP_SIZE_REF_8 } from "../../utility/constants/appConstants";
import { RegularText } from "../../utility/ui/appText";
import SearchBar from "../SearchBar";

const SearchScreenHeader = ({
  layout,
  navigation,
  options,
  route,
}: BottomTabHeaderProps) => {
  return (
    <SafeAreaView edges={["left", "right", "top"]} style={styles.header}>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FDFDFD",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: GAP_SIZE_REF_8,
  },
});

export default SearchScreenHeader;
