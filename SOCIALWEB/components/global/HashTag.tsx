import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE_REF_12, SIZE_REF_4 } from "../../utility/constants";
import { MediumText } from "../../utility/ui";

const HashTag = ({ id }: { id: string }) => {
  return (
    <Pressable>
      <SafeAreaView edges={[]} style={[styles.container]}>
        <MediumText style={styles.hashtagText}>{id}</MediumText>
      </SafeAreaView>
    </Pressable>
  );
};

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
  hashtagText: {
    marginHorizontal: SIZE_REF_4,
    fontSize: SIZE_REF_12,
  },
});

export default HashTag;
