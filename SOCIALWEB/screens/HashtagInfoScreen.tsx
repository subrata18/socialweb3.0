import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";
import { globalLayouts } from "../utility/style/layout";
import React from "react";
import { MediumText } from "../utility/ui/appText";
import RoundedIcon from "../components/RoundedIcon";
import {
  PROFILE_ICON_GAP,
  PROFILE_META_CONTAINER_PADDING,
  PROFILE_META_LINK_GAP,
  PROFILE_NAME_VALUE_PAIR_GAP,
  PROFILE_SCREEN_PADDING,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../utility/constants/appConstants";
import SwippableTabNavigator, {
  SwippableTabScreen,
} from "../components/global/CustomMaterialNavigator";
import ImageGallery from "../components/ImageGallery";
import VideoCollection from "../components/VideoColletion";
import SolidButton from "../components/SolidButton";
import NameValuePair from "../components/NameValuePair";
import { ScrollView } from "react-native-gesture-handler";

const HashtagInfo = () => {
  return (
    <SafeAreaView
      edges={[]}
      style={[
        {
          alignItems: "center",
          justifyContent: "space-evenly",
        },
      ]}
    >
      <RoundedIcon
        dragEnabled={false}
        tapEnabled={false}
        color="black"
        name="hashtag"
        size={64}
      />
      <MediumText style={[{ fontSize: 14 }]}>bollywoodbuff</MediumText>
    </SafeAreaView>
  );
};

const HashtagInfoScreen = () => {
  return (
    <SafeAreaView
      style={[globalLayouts.screenLayout, globalColors.screenColor]}
      edges={["left", "right", "bottom"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.wrapperScrollbar]}
        stickyHeaderIndices={[1]}
      >
        <SafeAreaView edges={[]} style={[styles.avatarMetaIconWrapper]}>
          <HashtagInfo />
          <SafeAreaView edges={[]} style={[styles.metaIconWrapper]}>
            <SafeAreaView edges={[]} style={[styles.metadataContainer]}>
              <NameValuePair name="uploads" value="400" />
              <NameValuePair name="saves" value="12M" style={styles.icon} />
            </SafeAreaView>
            <SolidButton title="save" onPress={() => {}} />
          </SafeAreaView>
        </SafeAreaView>

        <SwippableTabNavigator width={WINDOW_WIDTH} height={WINDOW_HEIGHT}>
          <SwippableTabScreen
            target={<ImageGallery />}
            activeColor="black"
            inActiveColor="grey"
            icon="heart-outline"
          />
          <SwippableTabScreen
            target={<VideoCollection />}
            activeColor="black"
            inActiveColor="grey"
            icon="heart-outline"
          />
        </SwippableTabNavigator>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    marginLeft: PROFILE_SCREEN_PADDING,
    marginBottom: PROFILE_META_LINK_GAP,
  },
  nameValuePair: {
    marginLeft: PROFILE_NAME_VALUE_PAIR_GAP,
  },
  icon: {
    marginLeft: PROFILE_ICON_GAP * 2,
  },
  wrapperScrollbar: {
    flex: 1,
    width: "100%",
  },

  metadataContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: PROFILE_META_CONTAINER_PADDING,
  },
  metaIconWrapper: {
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  avatarMetaIconWrapper: {
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "100%",
    paddingHorizontal: PROFILE_SCREEN_PADDING,
    paddingBottom: PROFILE_META_LINK_GAP,
  },
});

export default HashtagInfoScreen;
