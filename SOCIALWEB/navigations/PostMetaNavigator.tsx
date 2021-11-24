import { EventListenerCallback } from "@react-navigation/core";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { MaterialTopTabNavigationEventMap } from "@react-navigation/material-top-tabs/lib/typescript/src/types";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import Icon from "../components/global/Icon";
import CommentTab from "../screens/CommentTab";
import LikeTab from "../screens/LikeTab";
import ShareTab from "../screens/ShareTab";
import {
  PostMetaNavigatorParamList,
  RootStackNavigatorParamList,
} from "../utility/types";

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

const LikeTabOptions: MaterialTopTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) => {
    return focused ? (
      <Icon color={color} name="heart-solid" size={30} />
    ) : (
      <Icon color={color} name="heart-outline" size={30} />
    );
  },
  tabBarActiveTintColor: "#EE3434",
};

const CommentTabOptions: MaterialTopTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) => {
    return focused ? (
      <Icon color={color} name="comment-solid" size={30} />
    ) : (
      <Icon color={color} name="comment-outline" size={30} />
    );
  },
};

const ShareTabOptions: MaterialTopTabNavigationOptions = {
  tabBarIcon: ({ color, focused }) => {
    return focused ? (
      <Icon color={color} name="share-solid" size={30} />
    ) : (
      <Icon color={color} name="share-outline" size={30} />
    );
  },
};

const TabNavigator =
  createMaterialTopTabNavigator<PostMetaNavigatorParamList>();

type PostMetaInfoStackProps = StackScreenProps<
  RootStackNavigatorParamList,
  "PostMetaInfoStack"
>;

const PostMetaNavigator = ({ navigation }: PostMetaInfoStackProps) => {
  return (
    <TabNavigator.Navigator
      keyboardDismissMode="on-drag"
      overdrag={true}
      backBehavior="none"
      orientation="vertical"
      overScrollMode="always"
      transitionStyle="scroll"
      screenOptions={defaultScreenOptions}
      initialRouteName="CommentTab"
      screenListeners={{
        focus: ({ target }) => {
          if (target?.startsWith("LikeTab")) {
            navigation.setOptions({ headerTitle: "Likes" });
          } else if (target?.startsWith("CommentTab")) {
            navigation.setOptions({ headerTitle: "Comments" });
          } else if (target?.startsWith("ShareTab")) {
            navigation.setOptions({ headerTitle: "Shares" });
          }
        },
      }}
    >
      <TabNavigator.Screen
        name="LikeTab"
        component={LikeTab}
        options={LikeTabOptions}
      />
      <TabNavigator.Screen
        name="CommentTab"
        component={CommentTab}
        options={CommentTabOptions}
      />
      <TabNavigator.Screen
        name="ShareTab"
        component={ShareTab}
        options={ShareTabOptions}
      />
    </TabNavigator.Navigator>
  );
};

export default PostMetaNavigator;
