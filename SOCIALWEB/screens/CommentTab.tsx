import { ListRenderItemInfo, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback } from "react";
import { globalColors, globalLayouts } from "../utility/styles";
import CommentStack from "../components/stacks/CommentStack";
import { ConfiguredFlatList } from "../utility/ui";
import { SIZE_REF_16, SIZE_REF_4 } from "../utility/constants";
import ItemSeparator from "../components/global/ItemSeparator";

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const renderItem = (item: ListRenderItemInfo<number>) => {
  return <CommentStack />;
};

const keyExtractor = (item: number, index?: number) => {
  return "item" + index;
};

const CommentTab = () => {
  const itemSeparator = useCallback(
    () => <ItemSeparator axis="horizontal" length={SIZE_REF_16} />,
    []
  );

  return (
    <SafeAreaView
      style={[globalLayouts.tabLayout, globalColors.screenColor]}
      edges={["left", "right"]}
    >
      <ConfiguredFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={itemSeparator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContentContainer: {
    paddingVertical: SIZE_REF_16,
    paddingLeft: SIZE_REF_16,
    paddingRight: SIZE_REF_4,
  },
});

export default CommentTab;
