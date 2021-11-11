import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SearchScreenNavigationParamList } from "../utility/types/navigation_types";
import ImageGallery from "../components/ImageGallery";
import VideoCollection from "../components/VideoColletion";
import HashTagList from "../components/HashtTagList";
import UserList from "../components/UserList";
import Icon from "../components/global/Icon";

const SearchScreenNavigator =
  createMaterialTopTabNavigator<SearchScreenNavigationParamList>();

const SearchScreenNavigation = () => {
  return (
    <SearchScreenNavigator.Navigator
      screenOptions={{
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
      }}
    >
      <SearchScreenNavigator.Screen
        name="UserList"
        component={UserList}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Icon name="heart-solid" color={color} size={30} />
            ) : (
              <Icon name="heart-outline" color={color} size={30} />
            ),
        }}
      />
      <SearchScreenNavigator.Screen
        name="HashTagList"
        component={HashTagList}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Icon name="heart-solid" color={color} size={30} />
            ) : (
              <Icon name="heart-outline" color={color} size={30} />
            ),
        }}
      />
      <SearchScreenNavigator.Screen
        name="ImageGallery"
        component={ImageGallery}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Icon name="heart-solid" color={color} size={30} />
            ) : (
              <Icon name="heart-outline" color={color} size={30} />
            ),
        }}
      />
      <SearchScreenNavigator.Screen
        name="VideoCollection"
        component={VideoCollection}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Icon name="heart-solid" color={color} size={30} />
            ) : (
              <Icon name="heart-outline" color={color} size={30} />
            ),
        }}
      />
    </SearchScreenNavigator.Navigator>
  );
};

export default SearchScreenNavigation;
