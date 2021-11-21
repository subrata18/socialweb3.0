import React, { useCallback, useMemo, useState } from "react";
import { StyleProp, StyleSheet } from "react-native";
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from "react-native-fast-image";
import {
  GestureHandlerRootView,
  HandlerStateChangeEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  IMAGE_POST_MAX_HEIGHT,
  IMAGE_POST_MIN_HEIGHT,
  WINDOW_WIDTH,
} from "../../utility/constants";
import ImageFeedPostOverlay from "./ImageFeedPostOverlay";

export interface ImageFeedSinglePostProps {
  url: string;
  width: number;
  height: number;
}

const ImageFeedSinglePost = ({
  url,
  height,
  width,
}: ImageFeedSinglePostProps) => {
  const [isOverlayVisible, setOverlayVisible] = useState<boolean>(false);

  const imageSource: Source = useMemo(
    () => ({ cache: "immutable", priority: "high", uri: url }),
    [url]
  );

  const { resizeMode, scaledHeight } = useMemo(() => {
    const calculatedHeight = (height * WINDOW_WIDTH) / width;
    const scaledHeight = Math.max(
      Math.min(calculatedHeight, IMAGE_POST_MAX_HEIGHT),
      IMAGE_POST_MIN_HEIGHT
    );

    let resizeMode: ResizeMode = "center";

    if (calculatedHeight > scaledHeight) {
      resizeMode = "cover";
    }

    return { scaledHeight, resizeMode };
  }, [width, height]);

  const imageResolution: StyleProp<ImageStyle> = useMemo(
    () => ({ width: WINDOW_WIDTH, height: scaledHeight }),
    [scaledHeight]
  );

  const singleTapHandler = useCallback(
    ({
      nativeEvent,
    }: HandlerStateChangeEvent<TapGestureHandlerEventPayload>) => {
      if (nativeEvent.state === State.ACTIVE) {
        setOverlayVisible((state) => !state);
      }
    },
    []
  );

  return (
    <SafeAreaView edges={[]} style={[styles.imageFeedSinglePostContainer]}>
      <GestureHandlerRootView>
        <TapGestureHandler
          minPointers={1}
          maxDurationMs={600}
          maxDelayMs={600}
          numberOfTaps={1}
          maxDeltaX={width}
          maxDeltaY={height}
          shouldCancelWhenOutside={true}
          onHandlerStateChange={singleTapHandler}
        >
          <SafeAreaView edges={[]}>
            <FastImage
              source={imageSource}
              resizeMode={resizeMode}
              style={[imageResolution]}
            />
            <ImageFeedPostOverlay
              height={scaledHeight}
              width={WINDOW_WIDTH}
              isVisible={isOverlayVisible}
            />
          </SafeAreaView>
        </TapGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageFeedSinglePostContainer: {
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageFeedSinglePost;
