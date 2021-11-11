import React, { useCallback, useMemo, useRef } from "react";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  RegisteredStyle,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { TAB_ICON_SIZE_RATIO } from "../../utility/constants/appConstants";
import {
  CustomMaterialNavigatorProps,
  CustomMaterialScreenProps,
  TabItemProps,
} from "../../utility/types/other_types";
import AnimatedSafeAreaView from "../../utility/ui/animatedSafeAreaView";
import Icon from "./Icon";

const TabItem = ({
  activeColor,
  icon,
  inActiveColor,
  onPress,
  width,
  size,
}: TabItemProps) => {
  const itemDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({ width }),
    [width]
  );

  return (
    //individual boxes to render in the navigation tabs
    <Pressable onPress={onPress} android_disableSound={true}>
      <SafeAreaView edges={[]} style={[itemDynamicStyle, styles.tabItem]}>
        <Icon color={activeColor} name={icon} size={size} />
      </SafeAreaView>
    </Pressable>
  );
};

// a utility component to render as a screen of the navigator
export const SwippableTabScreen = ({ target }: CustomMaterialScreenProps) => {
  return target;
};

// custom naivagator which is embiddable in any screen component
const SwippableTabNavigator = ({
  width,
  height,
  children,
}: CustomMaterialNavigatorProps) => {
  //specify the absolute width and height of the navigator
  const containerDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({ width, height }),
    [width, height]
  );

  //an atomic data that produces the transition of the navigator based on its value
  //default to 0 as scroll content offset starts at 0
  const animationControlData = useRef<Animated.Value>(
    new Animated.Value(0)
  ).current;

  //a reference to the target scrollbar that renders the screens
  const scrollbarRef = useRef<ScrollView>(null);

  //a callback that is fired whenever the scroll event is emitted
  //sets the 'animationControlData' to the current scroll content offset
  const swipeHandler = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
      animationControlData.setValue(nativeEvent.contentOffset.x);
    },
    [animationControlData]
  );

  //calculates the width of the tab bar
  const tabBarDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      width,
    }),
    [width]
  );

  //calculates the width of the active tab indicator
  const tabIndicatorDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({ width: width / children.length, borderBottomWidth: 2 }),
    [width]
  );

  //list of the icons associated to eash screen component of the navigator
  const tabIconList = useMemo(
    () =>
      children.map((item, index) => (
        <TabItem
          activeColor={item.props.activeColor}
          icon={item.props.icon}
          inActiveColor={item.props.inActiveColor}
          key={"item" + index}
          size={width * TAB_ICON_SIZE_RATIO}
          width={width / children.length}
          onPress={() => {
            scrollbarRef.current?.scrollTo({
              x: index * width,
              y: 0,
              animated: true,
            });
          }}
        />
      )),
    [children]
  );

  return (
    <SafeAreaView edges={["left", "right"]}>
      <SafeAreaView
        edges={["left", "right"]}
        style={[styles.tabItemContainer, tabBarDynamicStyle]}
      >
        {tabIconList}
      </SafeAreaView>
      <SafeAreaView edges={["left", "right"]} style={[tabBarDynamicStyle]}>
        <AnimatedSafeAreaView
          edges={[]}
          style={[
            styles.tabIndicator,
            tabIndicatorDynamicStyle,
            {
              left: animationControlData.interpolate({
                inputRange: [0, width * (children.length - 1)],
                outputRange: [0, width - width / children.length],
                extrapolate: "clamp",
              }),
            },
          ]}
        ></AnimatedSafeAreaView>
      </SafeAreaView>
      <SafeAreaView edges={[]} style={[containerDynamicStyle]}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          scrollEventThrottle={1}
          pagingEnabled={true}
          onScroll={swipeHandler}
          ref={scrollbarRef}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabIndicator: {
    borderBottomColor: "black",
  },
  tabItemContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  tabItem: {
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SwippableTabNavigator;
