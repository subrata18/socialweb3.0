import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useCallback, useMemo, useRef } from "react";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SHUTTER_ICON_HORIZONTAL_MARGIN,
  SHUTTER_ICON_VERTICAL_MARGIN,
  SHUTTER_SCROLL_EVENT_THROTTLE,
  SIZE_REF_6,
} from "../../utility/constants";
import { globalColors } from "../../utility/styles";
import RoundedIcon from "../global/RoundedIcon";
import ShutterBodyListItem from "./ShutterBodyListItem";

const ShutterBody = ({ navigation, state }: BottomTabBarProps) => {
  //atomic value that controls the animation based on the scroll content offset
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;

  //callback that is fired continously between the scroll start and end
  //it sets the the 'scrollX' with current scroll content offset
  const scrollCallback = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollX.setValue(event.nativeEvent.contentOffset.x);
    },
    [scrollX]
  );

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

  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[globalColors.shutterBodyColor, styles.shutterBody]}
    >
      {/* scroll component that holds the list items and gives a paginated horizontal scroll experience */}
      <SafeAreaView style={[styles.shutterBodyContainer]} edges={[]}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEventThrottle={SHUTTER_SCROLL_EVENT_THROTTLE}
          onScroll={scrollCallback}
        >
          <ShutterBodyListItem>
            <RoundedIcon
              name={
                state.routeNames[state.index] === "SavedData"
                  ? "bookmark-solid"
                  : "bookmark-outline"
              }
              color="black"
              size={SIZE_REF_6 * 7}
              scale={0.7}
              style={styles.icon}
              tapEnabled={true}
              onTap={() => {
                console.log("clicked");
                tabIconPressHandler("SavedData");
              }}
            />
            <RoundedIcon
              name="live-outline"
              color="black"
              size={SIZE_REF_6 * 7}
              scale={0.7}
              style={styles.icon}
            />
            <RoundedIcon
              name="group-outline"
              color="black"
              size={SIZE_REF_6 * 7}
              scale={0.7}
              style={styles.icon}
            />
            <RoundedIcon
              name="gear-outline"
              color="black"
              size={SIZE_REF_6 * 7}
              scale={0.7}
              style={styles.icon}
            />
            <RoundedIcon
              name="message-outline"
              color="black"
              size={SIZE_REF_6 * 7}
              scale={0.7}
              style={styles.icon}
            />
          </ShutterBodyListItem>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shutterBody: {
    flex: 18,
    width: "100%",
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shutterBodyContainer: {
    width: "100%",
  },
  icon: {
    marginTop: SHUTTER_ICON_VERTICAL_MARGIN,
    marginRight: SHUTTER_ICON_HORIZONTAL_MARGIN,
  },
});

export default ShutterBody;
