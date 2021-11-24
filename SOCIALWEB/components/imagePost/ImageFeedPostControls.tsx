import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../global/Icon";
import { StyleSheet } from "react-native";
import {
  SIZE_REF_12,
  SIZE_REF_14,
  SIZE_REF_16,
  SIZE_REF_4,
  SIZE_REF_8,
} from "../../utility/constants";

const ImageFeedPostControls = () => {
  return (
    <SafeAreaView
      style={[styles.imageFeedPostControlsMainContainer]}
      edges={[]}
    >
      <SafeAreaView
        style={[styles.imageFeedPostControlsSubContainer]}
        edges={[]}
      >
        <Icon
          color="black"
          name="heart-outline"
          size={SIZE_REF_12 + SIZE_REF_14}
          style={styles.icon}
        />
        <Icon
          color="black"
          name="comment-outline"
          size={SIZE_REF_12 + SIZE_REF_14}
          style={styles.icon}
        />
        <Icon color="black" name="send" size={SIZE_REF_12 + SIZE_REF_14} />
      </SafeAreaView>
      <Icon
        color="black"
        name="bookmark-outline"
        size={SIZE_REF_12 + SIZE_REF_14}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageFeedPostControlsMainContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: SIZE_REF_8,
    paddingHorizontal: SIZE_REF_4,
  },
  imageFeedPostControlsSubContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  icon: {
    marginRight: SIZE_REF_16,
  },
});

export default ImageFeedPostControls;