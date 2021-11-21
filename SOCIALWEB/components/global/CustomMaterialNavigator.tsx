import React, { useCallback, useMemo, useRef } from "react";
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SHUTTER_HEIGHT,
  SIZE_REF_2,
  TAB_INDICATOR_HEIGHT,
} from "../../utility/constants";
import {
  CustomMaterialNavigatorProps,
  CustomMaterialScreenProps,
  TabItemProps,
} from "../../utility/types";
import { AnimatedSafeAreaView } from "../../utility/ui";
import Icon from "./Icon";

const TabItem = ({
  activeIcon,
  inActiveIcon,
  onPress,
  size,
  animationControlData,
  width,
  index,
}: TabItemProps) => {
  const tabItemDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      width,
    }),
    [width]
  );

  const activeTabItemDynamicStyle = useMemo(
    () => ({
      opacity: animationControlData.interpolate({
        inputRange: [width * (index - 1), width * index, width * (index + 1)],
        outputRange: [0, 1, 0],
        extrapolate: "clamp",
      }),
    }),
    [animationControlData]
  );

  const inActiveTabItemDynamicStyle = useMemo(
    () => ({
      opacity: animationControlData.interpolate({
        inputRange: [width * (index - 1), width * index, width * (index + 1)],
        outputRange: [1, 0, 1],
        extrapolate: "clamp",
      }),
    }),
    [animationControlData]
  );

  return (
    //individual boxes to render in the navigation tabs
    <Pressable onPress={onPress} android_disableSound={true}>
      <Animated.View
        style={[styles.tabItem, tabItemDynamicStyle, activeTabItemDynamicStyle]}
      >
        <Icon name={activeIcon} color="black" size={size} />
      </Animated.View>
      <Animated.View
        style={[
          styles.tabItem,
          tabItemDynamicStyle,
          inActiveTabItemDynamicStyle,
          styles.inActiveTabItem,
        ]}
      >
        <Icon name={inActiveIcon} color="black" size={size} />
      </Animated.View>
    </Pressable>
  );
};

export const CustomMaterialScreen = ({ target }: CustomMaterialScreenProps) => {
  return target;
};

// const TabItem = ({
//   activeColor,
//   icon,
//   inActiveColor,
//   onPress,
//   width,
//   size,
// }: TabItemProps) => {
//   const itemDynamicStyle: StyleProp<ViewStyle> = useMemo(
//     () => ({ width }),
//     [width]
//   );

//   return (
//     //individual boxes to render in the navigation tabs
//     <Pressable onPress={onPress} android_disableSound={true}>
//       <SafeAreaView edges={[]} style={[itemDynamicStyle, styles.tabItem]}>
//         <Icon color={activeColor} name={icon} size={size} />
//       </SafeAreaView>
//     </Pressable>
//   );
// };

// a utility component to render as a screen of the navigator
// export const SwippableTabScreen = ({ target }: CustomMaterialScreenProps) => {
//   return target;
// };

// custom naivagator which is embiddable in any screen component
const SwippableTabNavigator = ({
  width,
  height,
  children,
}: CustomMaterialNavigatorProps) => {
  //specify the absolute width and height of the navigator
  const containerDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({ width: "100%", height }),
    [height]
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
      animationControlData.setValue(
        nativeEvent.contentOffset.x / children.length
      );
    },
    [animationControlData, children.length]
  );

  //calculates the width of the tab bar
  const tabBarDynamicStyle: StyleProp<ViewStyle> = useMemo(
    () => ({
      width,
    }),
    [width]
  );

  //calculates the width of the active tab indicator
  const tabIndicatorDynamicStyle = useMemo(
    () => ({
      width: width / children.length,
      left: animationControlData,
    }),
    [width, animationControlData, children.length]
  );

  //list of the icons associated to eash screen component of the navigator
  const tabIconList = useMemo(
    () =>
      children.map((item, index) => (
        <TabItem
          key={"itemm" + index}
          index={index}
          activeIcon={item.props.activeIcon}
          inActiveIcon={item.props.inActiveIcon}
          animationControlData={animationControlData}
          size={item.props.size}
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
    <SafeAreaView edges={["left", "right"]} style={[tabBarDynamicStyle]}>
      <View style={[styles.tabItemContainer]}>{tabIconList}</View>
      <View style={[tabBarDynamicStyle]}>
        <AnimatedSafeAreaView
          edges={[]}
          style={[styles.tabIndicator, tabIndicatorDynamicStyle]}
        ></AnimatedSafeAreaView>
      </View>
      <SafeAreaView edges={[]} style={[containerDynamicStyle]}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          scrollEventThrottle={1}
          pagingEnabled={true}
          onScroll={swipeHandler}
          ref={scrollbarRef}
          style={styles.tabList}
          contentContainerStyle={styles.tabListContentContainer}
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
    borderBottomWidth: TAB_INDICATOR_HEIGHT,
  },
  tabItemContainer: {
    alignItems: "stretch",
    justifyContent: "space-around",
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  tabItem: {
    paddingVertical: SIZE_REF_2,
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  inActiveTabItem: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  tabList: { width: "100%", flex: 1 },
  tabListContentContainer: {
    paddingBottom: Math.floor((SHUTTER_HEIGHT * 4) / 25),
  },
});

export default SwippableTabNavigator;
