import React, { ReactNode, useMemo } from "react";
import { StyleProp, StyleSheet, TextProps, TextStyle } from "react-native";
import { IconProps } from "../../utility/types/other_types";
import { CustomIcon } from "../../utility/ui/appIcon";

const Icon = ({ color, name, onPress, size }: IconProps) => {
  //combine the default properties and passed on properties for the target icon
  const iconDefaultProps: TextProps = useMemo(
    () => ({
      adjustsFontSizeToFit: true,
      allowFontScaling: true,
      maxFontSizeMultiplier: 2.0,
      minimumFontScale: 0.5,
      onPress: onPress,
    }),
    [onPress]
  );

  return (
    <CustomIcon name={name} size={size} color={color} {...iconDefaultProps} />
  );
};

export default Icon;
