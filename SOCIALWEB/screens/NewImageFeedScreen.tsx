import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageFeedPost from "../components/imagePost/ImageFeedPost";
import StoryList from "../components/imagePost/StoryList";
import { SHUTTER_HEIGHT } from "../utility/constants";
import { globalColors, globalLayouts } from "../utility/styles";
import { ConfiguredFlatList } from "../utility/ui";

const NewImageFeedScreen = () => {
  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[globalLayouts.screenLayout, globalColors.screenColor]}
    >
      <StatusBar hidden={true} />
      <ConfiguredFlatList
        data={[]}
        renderItem={() => null}
        style={[styles.list]}
        ListEmptyComponent={ImageFeedPost}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={StoryList}
        contentContainerStyle={styles.listContentContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    // backgroundColor: "orange",
    marginBottom: Math.floor((SHUTTER_HEIGHT * 4) / 25),
  },
  listContentContainer: {
    paddingHorizontal: 0,
  },
});

export default NewImageFeedScreen;
