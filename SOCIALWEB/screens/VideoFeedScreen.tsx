import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors, globalLayouts } from "../utility/styles";
import { RegularText } from "../utility/ui";

const VideoFeedScreen = () => {
  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[globalLayouts.screenLayout, globalColors.screenColor]}
    >
      <RegularText>Video Feed Screen</RegularText>
    </SafeAreaView>
  );
};

export default VideoFeedScreen;
