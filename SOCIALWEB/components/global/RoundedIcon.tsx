import React, { useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import {
  PanGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { RoundedIconProps } from "../../utility/types";
import Icon from "./Icon";

//a utility component that works like a rounded icon with a speicific background
const RoundedIcon = (props: RoundedIconProps) => {
  const {
    dragEnabled,
    tapEnabled,
    onDrag,
    onTap,
    size,
    scale,
    style,
    ...restProps
  } = props;

  const iconBackgroundDynamicStyle: StyleProp<ViewStyle> = useMemo(() => {
    return {
      borderRadius: size * 0.5,
      width: size,
      height: size,
    };
  }, [size]);

  return (
    <TapGestureHandler
      enabled={tapEnabled}
      numberOfTaps={1}
      onActivated={onTap}
    >
      <PanGestureHandler
        enabled={dragEnabled}
        minPointers={1}
        maxPointers={1}
        avgTouches={true}
        enableTrackpadTwoFingerGesture={true}
        onGestureEvent={onDrag}
      >
        <SafeAreaView
          edges={[]}
          style={[styles.iconBackground, iconBackgroundDynamicStyle, style]}
        >
          <Icon {...restProps} size={size * (scale ? scale : 0.5)} />
        </SafeAreaView>
      </PanGestureHandler>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  iconBackground: {
    backgroundColor: "#EBE8FB",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoundedIcon;
