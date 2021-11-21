import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { globalColors, globalLayouts } from "../utility/styles";

const NotificationScreen = () => {
  return (
    <SafeAreaView
      style={[globalLayouts.screenLayout, globalColors.screenColor]}
      edges={["left", "bottom"]}
    ></SafeAreaView>
  );
};

export default NotificationScreen;
