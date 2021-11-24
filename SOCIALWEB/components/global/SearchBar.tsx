import React, { useCallback, useState } from "react";
import { StyleProp, StyleSheet, TextInput, TextStyle } from "react-native";
import { SIZE_REF_10, SIZE_REF_2, SIZE_REF_6 } from "../../utility/constants";

export interface SearchBarProps {
  style?: StyleProp<TextStyle>;
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
    <TextInput
      value={searchValue}
      placeholder="search..."
      onChangeText={textChangeCallback}
      style={styles.searchInput}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    paddingHorizontal: SIZE_REF_6,
    paddingVertical: SIZE_REF_2,
    backgroundColor: "#EBE8FB",
    flex: 1,
    borderRadius: SIZE_REF_10,
  },
});

export default SearchBar;
