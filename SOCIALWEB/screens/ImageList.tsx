import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { globalColors, globalLayouts } from "../utility/styles";

const ImageList = () => {
  return (
    <SafeAreaView
      style={[globalLayouts.screenLayout, globalColors.screenColor]}
    >
      <Text>Image List</Text>
    </SafeAreaView>
  );
};

export default ImageList;
