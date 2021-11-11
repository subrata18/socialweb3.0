import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FONT_SIZE_REF_12,
  GAP_SIZE_REF_4,
} from "../../utility/constants/appConstants";
import { MediumText } from "../../utility/ui/appText";

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
    borderRadius: 12,
    padding: GAP_SIZE_REF_4,
  },
  hashtagText: {
    marginHorizontal: GAP_SIZE_REF_4,
    fontSize: FONT_SIZE_REF_12,
  },
});

export default HashTag;
