import React, { useCallback, useState } from "react";
import { StyleProp, StyleSheet, TextInput, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE_REF_10, SIZE_REF_2, SIZE_REF_6 } from "../../utility/constants";

export interface SearchBarProps {
  style?: StyleProp<ViewStyle>;
}

const SearchBar = ({ style }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState<string>(""); //State variable used to store the search text.

  const textChangeCallback = useCallback(
    // A callback function called whenever the text input is changed.
    (text: string) => {
      setSearchValue(text);
    },
    [searchValue]
  );

  return (
    <SafeAreaView style={[styles.searchBar, style]} edges={["left", "right"]}>
      <TextInput
        value={searchValue}
        placeholder="search..."
        onChangeText={textChangeCallback}
        style={styles.searchInput}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    backgroundColor: "#EBE8FB",
    borderRadius: SIZE_REF_10,
  },
  searchInput: {
    paddingHorizontal: SIZE_REF_6,
    paddingVertical: SIZE_REF_2,
  },
});

export default SearchBar;
