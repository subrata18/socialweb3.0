import React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import ImageGallery from "../screens/ImageGallery";
import VideoCollection from "../screens/VideoColletion";
import Icon from "../components/global/Icon";
import HashTagListTab from "../screens/HashtTagListTab";
import { SearchScreenNavigationParamList } from "../utility/types";
import {
  SHUTTER_HEIGHT,
  SIZE_REF_14,
  SIZE_REF_16,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "../utility/constants";

const SearchScreenNavigator =
  createMaterialTopTabNavigator<SearchScreenNavigationParamList>();

const defaultScreenOptions: MaterialTopTabNavigationOptions = {
  tabBarShowLabel: false,
  tabBarAllowFontScaling: true,
  tabBarPressColor: "transparent",
  tabBarPressOpacity: 1,
  tabBarInactiveTintColor: "black",
  tabBarActiveTintColor: "black",
  tabBarIndicatorStyle: {
    backgroundColor: "black",
  },
  tabBarIndicatorContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#D1CBCB",
  },
  tabBarStyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: "#FDFDFD",
  },
};

const hashtagListOptions: MaterialTopTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) =>
    focused ? (
      <Icon
        name="hashtag-solid"
        color={color}
        size={SIZE_REF_16 + SIZE_REF_14}
      />
    ) : (
      <Icon
        name="hashtag-outline"
        color={color}
        size={SIZE_REF_16 + SIZE_REF_14}
      />
    ),
};

const imageGalleryOptions: MaterialTopTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) =>
    focused ? (
      <Icon
        name="camera-solid"
        color={color}
        size={SIZE_REF_16 + SIZE_REF_14}
      />
    ) : (
      <Icon
        name="camera-outline"
        color={color}
        size={SIZE_REF_16 + SIZE_REF_14}
      />
    ),
};

const videoCollectionOptions: MaterialTopTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) =>
    focused ? (
      <Icon name="video-solid" color={color} size={SIZE_REF_16 + SIZE_REF_14} />
    ) : (
      <Icon
        name="video-outline"
        color={color}
        size={SIZE_REF_16 + SIZE_REF_14}
      />
    ),
};

const SavedScreenNavigation = () => {
  return (
    <SearchScreenNavigator.Navigator
      keyboardDismissMode="on-drag"
      overdrag={true}
      backBehavior="none"
      orientation="vertical"
      overScrollMode="always"
      transitionStyle="scroll"
      screenOptions={defaultScreenOptions}
      sceneContainerStyle={{
        paddingBottom: Math.floor((SHUTTER_HEIGHT * 4) / 25),
      }}
    >
      <SearchScreenNavigator.Screen
        name="HashTagList"
        component={HashTagListTab}
        options={hashtagListOptions}
      />
      <SearchScreenNavigator.Screen
        name="ImageGallery"
        component={ImageGallery}
        options={imageGalleryOptions}
      />
      <SearchScreenNavigator.Screen
        name="VideoCollection"
        component={VideoCollection}
        options={videoCollectionOptions}
      />
    </SearchScreenNavigator.Navigator>
  );
};

export default SavedScreenNavigation;
