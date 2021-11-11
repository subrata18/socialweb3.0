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
  SHUTTER_CAROSOL_ACTIVE_DOT_SIZE,
  SHUTTER_CAROSOL_NORMAL_DOT_SIZE,
  SHUTTER_SCROLL_EVENT_THROTTLE,
} from "../../utility/constants/appConstants";
import { globalColors } from "../../utility/style/colors";
import Carosol from "../global/Carosol";
import ShutterBodyListItem from "./ShutterBodyListItem";

const ShutterBody = () => {
  //atomic value that controls the animation based on the scroll content offset
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;

  //list of shutter body item needed to hold the shutter navigation icons
  const shutterBodyListItems = useMemo(() => {
    const list = [];
    list.push(<ShutterBodyListItem key="item1" />);
    list.push(<ShutterBodyListItem key="item2" />);
    list.push(<ShutterBodyListItem key="item3" />);
    list.push(<ShutterBodyListItem key="item4" />);
    return list;
  }, []);

  //callback that is fired continously between the scroll start and end
  //it sets the the 'scrollX' with current scroll content offset
  const scrollCallback = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      scrollX.setValue(event.nativeEvent.contentOffset.x);
    },
    [scrollX]
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
          {shutterBodyListItems}
        </ScrollView>
      </SafeAreaView>
      {/* carosol component indicates current item index that is active on the scrollbar*/}
      <Carosol
        activeDotSize={SHUTTER_CAROSOL_ACTIVE_DOT_SIZE}
        normalDotSize={SHUTTER_CAROSOL_NORMAL_DOT_SIZE}
        noOfItems={4}
        scrollReference={scrollX}
      />
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
});

export default ShutterBody;
