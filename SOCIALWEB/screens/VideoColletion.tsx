import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabBar } from "react-native-tab-view";
import TextBar from "../components/global/TextBar";
import { globalColors, globalLayouts } from "../utility/styles";
import { BoldText } from "../utility/ui";

const VideoCollection = () => {
    return (
        <SafeAreaView
            edges={["left", "right"]}
            style={[globalLayouts.tabLayout, globalColors.screenColor]}
        >
            {/* <BoldText>video collection</BoldText> */}
            <TextBar />
        </SafeAreaView>
    );
};

export default VideoCollection;
