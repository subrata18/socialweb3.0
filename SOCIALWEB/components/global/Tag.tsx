import React, { useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE_REF_10, SIZE_REF_16, SIZE_REF_4 } from "../../utility/constants";
import { RegularText } from "../../utility/ui";

export interface TagProp {
  id: string;
  style?: StyleProp<ViewStyle>;
}

const Tag = ({ id, style }: TagProp) => {
  const tagImageSource: Source = useMemo(
    () => ({
      cache: "immutable",
      priority: "high",
      uri: "https://source.unsplash.com/random/150x150",
    }),
    []
  );

  return (
    <SafeAreaView edges={[]} style={[styles.tagContainer, style]}>
      <FastImage
        source={tagImageSource}
        resizeMode="cover"
        style={styles.tagImageStyle}
      />
      <RegularText
        style={styles.tagTextStyle}
        allowFontScaling={true}
        maxFontSizeMultiplier={2}
        minimumFontScale={0.5}
        adjustsFontSizeToFit={true}
      >
        {id}
      </RegularText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    paddingHorizontal: SIZE_REF_4,
    paddingVertical: SIZE_REF_4,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(41, 40, 40, 0.8)",
    borderRadius: SIZE_REF_16,
  },
  tagImageStyle: {
    width: SIZE_REF_16,
    height: SIZE_REF_16,
    borderRadius: SIZE_REF_16 * 0.5,
  },
  tagTextStyle: {
    color: "white",
    fontSize: SIZE_REF_10,
    marginHorizontal: SIZE_REF_4,
  },
});

export default Tag;
