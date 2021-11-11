import React, { useCallback, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GAP_SIZE_REF_2,
  GAP_SIZE_REF_6,
  SIZE_REF_10,
} from "../utility/constants/appConstants";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>(""); //State variable used to store the search text.

  const textChangeCallback = useCallback(
    // A callback function called whenever the text input is changed.
    (text: string) => {
      setSearchValue(text);
    },
    [searchValue]
  );

  return (
    <SafeAreaView style={styles.searchBar} edges={["left", "right"]}>
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
    paddingHorizontal: GAP_SIZE_REF_6,
    paddingVertical: GAP_SIZE_REF_2,
  },
});

export default SearchBar;
