import React, { useCallback } from "react";
import { Feather, AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import GenericTabBarIcon from "./GenericTabBarIcon";
import AnimatedSafeAreaView from "../../utility/ui/animatedSafeAreaView";
import { globalColors } from "../../utility/style/colors";
import useShutterAnimation from "../../hooks/useShutterAnimation";
import { Animated, StyleSheet } from "react-native";
import { MainTabNavigationBarProps } from "../../utility/types/other_types";

const MainTabNavigationBar = ({
  state,
  navigation,
  animationControlData,
}: MainTabNavigationBarProps) => {
  //generic navigation icon press handler that navigates to a specific screen depending on the
  //icon pressed and currently active screen
  const tabIconPressHandler = useCallback(
    (routeName: string) => {
      //manually emitting the 'tabPress' navigation event that can be handled by the target screen
      const tabPressEvent = navigation.emit({
        type: "tabPress",
        target: routeName,
        canPreventDefault: true,
      });

      //if the current screen is not the target screen and the default behavior of the 'tabPress' event is not
      //prevented then navigate to the target screen
      if (
        routeName !== state.routeNames[state.index] &&
        !tabPressEvent.defaultPrevented
      ) {
        navigation.navigate(routeName);
      }
    },
    [navigation.navigate, navigation.emit, state.routeNames, state.index]
  );

  const { shutterBorderDynamicStyle } =
    useShutterAnimation(animationControlData);

  //iterate through all the route names and render the appropriate navigation icons for each routeName
  return (
    <AnimatedSafeAreaView
      style={[
        styles.shutterHeader,
        globalColors.shutterHeaderColor,
        //note that shutterDynamicStyle is used in both shutter and shutter-header component
        //because both transition effect is same and depend on the same atomic value
        shutterBorderDynamicStyle,
      ]}
      edges={["left", "right"]}
    >
      {state.routes.map((item, index) => {
        switch (item.name) {
          case "ImageFeed":
            return (
              <GenericTabBarIcon
                key={index}
                onPress={tabIconPressHandler}
                routeName="ImageFeed"
              >
                <Feather name="camera" size={24} color="black" />
              </GenericTabBarIcon>
            );
          case "SearchResult":
            return (
              <GenericTabBarIcon
                key={index}
                onPress={tabIconPressHandler}
                routeName="SearchResult"
              >
                <Feather name="search" size={24} color="black" />
              </GenericTabBarIcon>
            );
          case "Profile":
            return (
              <GenericTabBarIcon
                key={index}
                onPress={tabIconPressHandler}
                routeName="Profile"
              >
                <AntDesign name="profile" size={24} color="black" />
              </GenericTabBarIcon>
            );
          case "Trending":
            return (
              <GenericTabBarIcon
                key={index}
                onPress={tabIconPressHandler}
                routeName="Trending"
              >
                <FontAwesome5 name="hotjar" size={24} color="black" />
              </GenericTabBarIcon>
            );
          case "Notification":
            return (
              <GenericTabBarIcon
                key={index}
                onPress={tabIconPressHandler}
                routeName="Notification"
              >
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              </GenericTabBarIcon>
            );
        }
      })}
    </AnimatedSafeAreaView>
  );
};

const styles = StyleSheet.create({
  shutterHeader: {
    flex: 4,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 1,
  },
});
export default MainTabNavigationBar;
