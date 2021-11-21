import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../global/Icon";
import { StyleSheet } from "react-native";
import EntityInfo from "../global/EntityInfo";
import { globalColors } from "../../utility/styles";
import {
  SIZE_REF_12,
  SIZE_REF_14,
  SIZE_REF_4,
  SIZE_REF_8,
} from "../../utility/constants";

const ImageFeedPostHeader = () => {
  return (
    <SafeAreaView
      style={[
        globalColors.imageFeedPostHeaderContainerColor,
        styles.imageFeedPostHeaderContainer,
      ]}
      edges={[]}
    >
      <EntityInfo
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Kiara_Advani_in_promotion_of_%27M.S._Dhoni_%2801%29.jpg/220px-Kiara_Advani_in_promotion_of_%27M.S._Dhoni_%2801%29.jpg"
        primaryText="roybond007"
        secondaryText="30m"
        size={SIZE_REF_4 * 9}
      />
      <Icon color="black" name="more-solid" size={SIZE_REF_12 + SIZE_REF_14} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageFeedPostHeaderContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: SIZE_REF_8,
    paddingHorizontal: SIZE_REF_4,
  },
});

export default ImageFeedPostHeader;
