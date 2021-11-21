import React, { useMemo } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { ItemSeparatorProps } from "../../utility/types";

const ItemSeparator = ({ axis, length }: ItemSeparatorProps) => {
  const dynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      borderColor: "transparent",
      borderRightWidth: axis === "horizontal" ? 0 : length,
      borderBottomWidth: axis === "vertical" ? 0 : length,
      borderTopWidth: 0,
      borderLeftWidth: 0,
    }),
    [axis, length]
  );

  return <View style={dynamicStyle}></View>;
};

export default ItemSeparator;
