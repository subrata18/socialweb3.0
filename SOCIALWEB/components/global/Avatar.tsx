import React, { useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import FastImage, { ImageStyle, Source } from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { AVATAR_PHOTO_TO_GAP_RATIO } from "../../utility/constants/appConstants";
import { AvatarProps } from "../../utility/types/other_types";

const Avatar = ({ size, url, style }: AvatarProps) => {
  //source of the image with high priority and immutable caching mechanism
  const avatarSource: Source = useMemo(
    () => ({
      uri: url,
      cache: "immutable",
      priority: "high",
    }),
    [url]
  );

  //calculate the dynamic width, height  and border-radius of the image based on the size prop
  const avatarDynamicStyle: ImageStyle = useMemo(() => {
    const imageSize = size * (1 - 4 * AVATAR_PHOTO_TO_GAP_RATIO);

    return {
      width: imageSize,
      height: imageSize,
      borderRadius: imageSize * 0.5,
    };
  }, [size]);

  //calculate the dynamic style of the avatar container based on the size prop
  const avatarContainerDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      padding: size * AVATAR_PHOTO_TO_GAP_RATIO,
      borderWidth: size * AVATAR_PHOTO_TO_GAP_RATIO,
      borderRadius: size * 0.5,
      height: size,
      width: size,
    }),
    [size]
  );

  return (
    <SafeAreaView
      edges={[]}
      style={[avatarContainerDynamicStyle, styles.conatainer, style]}
    >
      {/* a fast image component base on the source with cover resizing so that the image can fill the rounded
      border */}
      <FastImage
        source={avatarSource}
        resizeMode="cover"
        style={[avatarDynamicStyle]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#3F71F2",
    flexWrap: "nowrap",
  },
});

export default Avatar;
