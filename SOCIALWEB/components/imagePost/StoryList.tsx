import React, { useCallback } from "react";
import { ListRenderItemInfo, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  SIZE_REF_10,
  SIZE_REF_16,
  SIZE_REF_2,
  SIZE_REF_4,
  WINDOW_HEIGHT,
} from "../../utility/constants";
import { ConfiguredFlatList } from "../../utility/ui";
import AvatarSocialIdPair from "../global/AvatarSocialIdPair";
import ItemSeparator from "../global/ItemSeparator";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const renderItem = (item: ListRenderItemInfo<number>) => (
  <AvatarSocialIdPair
    avatarSize={0.11 * WINDOW_HEIGHT}
    fontSize={SIZE_REF_10}
    gapSize={SIZE_REF_2}
  />
);

const keyExtractor = (item: number) => "story" + item;

const StoryList = () => {
  const itemSeparetorCallback = useCallback(
    () => <ItemSeparator axis="vertical" length={SIZE_REF_4} />,
    []
  );

  const itemLayoutCallback = useCallback(
    (data: number[] | undefined | null, index: number) => ({
      index,
      length: 0.11 * WINDOW_HEIGHT + SIZE_REF_4,
      offset: index * (0.11 * WINDOW_HEIGHT + SIZE_REF_4),
    }),
    []
  );

  return (
    <SafeAreaView edges={["left", "right"]} style={[styles.container]}>
      <ConfiguredFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        ItemSeparatorComponent={itemSeparetorCallback}
        getItemLayout={itemLayoutCallback}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 0.11 * WINDOW_HEIGHT + SIZE_REF_10 + SIZE_REF_2,
    marginBottom: SIZE_REF_16,
  },
  listContentContainer: {
    paddingVertical: 0,
    paddingHorizontal: SIZE_REF_4,
  },
});

export default StoryList;
