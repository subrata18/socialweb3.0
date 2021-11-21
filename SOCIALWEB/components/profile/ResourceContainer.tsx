import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE_REF_12, SIZE_REF_16, SIZE_REF_4 } from "../../utility/constants";
import { ResourceContainnerProps } from "../../utility/types";
import { MediumText } from "../../utility/ui";
import Icon from "../global/Icon";

const HighlightedLink = ({
  iconName,
  title,
  url,
  style,
}: ResourceContainnerProps) => {
  const pressHandler = useCallback(() => {}, []);

  return (
    <Pressable onPress={pressHandler}>
      <SafeAreaView style={[styles.container, style]} edges={[]}>
        <Icon name={iconName} color="black" size={SIZE_REF_16} />
        <MediumText style={styles.titleText}>{title}</MediumText>
      </SafeAreaView>
    </Pressable>
  );
};

export default HighlightedLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "nowrap",
    backgroundColor: "#EBE8FB",
    borderRadius: SIZE_REF_12,
    padding: SIZE_REF_4,
  },
  titleText: {
    marginHorizontal: SIZE_REF_4,
    fontSize: SIZE_REF_12,
  },
});
