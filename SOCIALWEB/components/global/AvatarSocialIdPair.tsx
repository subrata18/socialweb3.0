import React, { useMemo } from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { AvatarSocialIdPairProps } from "../../utility/types";
import { RegularText } from "../../utility/ui";
import Avatar from "./Avatar";

const AvatarSocialIdPair = ({
  avatarSize,
  fontSize,
  gapSize,
  style,
}: AvatarSocialIdPairProps) => {
  const dynamicContainerStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      width: avatarSize,
      height: avatarSize + gapSize + fontSize,
    }),
    [avatarSize, gapSize, fontSize]
  );

  const dynamicTextStyle: StyleProp<TextStyle> = useMemo(
    () => ({ fontSize }),
    [fontSize]
  );

  return (
    <View style={[dynamicContainerStyle, styles.container, style]}>
      <Avatar
        size={avatarSize}
        url="https://pbs.twimg.com/profile_images/495084253793628160/sw0tCdPx.jpeg"
      />
      <RegularText
        ellipsizeMode="tail"
        numberOfLines={1}
        style={[dynamicTextStyle]}
      >
        roybond00000007
      </RegularText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
});

export default AvatarSocialIdPair;
