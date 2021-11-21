import React, { ReactElement, useCallback } from "react";
import {
  ListRenderItemInfo,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE_REF_4 } from "../../utility/constants";
import { ConfiguredFlatList } from "../../utility/ui";
import ItemSeparator from "./ItemSeparator";

export interface HighlightedContentListProps {
  data: string[];
  renderItem: (item: ListRenderItemInfo<string>) => ReactElement<any>;
  keyExtractor: (item: string, index?: number) => string;
  style?: StyleProp<ViewStyle>;
}

const HighlightedContentList = ({
  data,
  keyExtractor,
  renderItem,
  style,
}: HighlightedContentListProps) => {
  const itemSeparetorCallback = useCallback(
    () => <ItemSeparator axis="vertical" length={SIZE_REF_4} />,
    []
  );

  return (
    <SafeAreaView edges={[]} style={[styles.container, style]}>
      <ConfiguredFlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={itemSeparetorCallback}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },

  listContentContainer: {
    paddingVertical: 0,
    paddingHorizontal: SIZE_REF_4,
    backgroundColor: "orange",
  },
});

export default HighlightedContentList;
