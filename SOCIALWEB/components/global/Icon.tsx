import React, { useMemo } from "react";
import { Pressable, TextProps } from "react-native";
import { IconProps } from "../../utility/types";
import { CustomIcon } from "../../utility/ui";

const Icon = ({ color, name, onPress, size, style }: IconProps) => {
  //combine the default properties and passed on properties for the target icon
  const iconDefaultProps: TextProps = useMemo(
    () => ({
      adjustsFontSizeToFit: true,
      allowFontScaling: true,
      maxFontSizeMultiplier: 2.0,
      minimumFontScale: 0.5,
    }),
    []
  );

  return (
    <Pressable onPress={onPress} style={[style]}>
      <CustomIcon name={name} size={size} color={color} {...iconDefaultProps} />
    </Pressable>
  );
};

export default Icon;
