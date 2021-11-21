import React, { useCallback } from "react";
import useShutterAnimation from "../../hooks/useShutterAnimation";
import { StyleSheet } from "react-native";
import Icon from "../global/Icon";
import ProfileIcon from "./ProfileIcon";
import { MainTabNavigationBarProps } from "../../utility/types";
import { AnimatedSafeAreaView } from "../../utility/ui";
import { globalColors } from "../../utility/styles";
import { SIZE_REF_14, SIZE_REF_16, SIZE_REF_8 } from "../../utility/constants";

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
      edges={[]}
    >
      {state.routes.slice(0, 5).map((item, index) => {
        switch (item.name) {
          case "ImageFeed":
            return (
              <Icon
                name={
                  state.routeNames[state.index] === "ImageFeed"
                    ? "camera-solid"
                    : "camera-outline"
                }
                color="black"
                size={SIZE_REF_16 + SIZE_REF_14}
                onPress={() => tabIconPressHandler("ImageFeed")}
                key={"icon" + index}
              />
            );
          case "SearchResult":
            return (
              <Icon
                name={
                  state.routeNames[state.index] === "SearchResult"
                    ? "search-bold"
                    : "search-regular"
                }
                color="black"
                size={SIZE_REF_16 + SIZE_REF_14}
                onPress={() => tabIconPressHandler("SearchResult")}
                key={"icon" + index}
              />
            );
          case "Profile":
            return (
              <ProfileIcon
                key={"icon" + index}
                style={{ transform: [{ translateY: -8 }] }}
                size={SIZE_REF_8 * 6}
              />
            );
          case "Trending":
            return (
              <Icon
                name={
                  state.routeNames[state.index] === "Trending"
                    ? "trending-solid"
                    : "trending-outline"
                }
                color="black"
                size={SIZE_REF_16 + SIZE_REF_14}
                onPress={() => tabIconPressHandler("Trending")}
                key={"icon" + index}
              />
            );
          case "Notification":
            return (
              <Icon
                name={
                  state.routeNames[state.index] === "Notification"
                    ? "notification-solid"
                    : "notification-outline"
                }
                color="black"
                size={SIZE_REF_16 + SIZE_REF_14}
                onPress={() => tabIconPressHandler("Notification")}
                key={"icon" + index}
              />
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
