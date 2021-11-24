import { ListRenderItemInfo, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback } from "react";
import { globalColors, globalLayouts } from "../utility/styles";
import { SIZE_REF_10, SIZE_REF_4, SIZE_REF_8 } from "../utility/constants";
import RoundedIcon from "../components/global/RoundedIcon";
import { ConfiguredFlatList } from "../utility/ui";
import MetaContainer from "../components/stacks/UserInfoStack";
import ItemSeparator from "../components/global/ItemSeparator";

const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const renderItem = (item: ListRenderItemInfo<number>) => {
  return <MetaContainer />;
};

const keyExtractor = (item: number, index?: number) => {
  return "item" + index;
};

const ShareTab = () => {
  const itemSeparator = useCallback(
    () => <ItemSeparator axis="horizontal" length={SIZE_REF_4} />,
    []
  );

  const itemLayout = useCallback(
    (data: any[] | null | undefined, index: number) => ({
      index,
      length: 11 * SIZE_REF_4,
      offset: index * 11 * SIZE_REF_4,
    }),
    []
  );

  return (
    <SafeAreaView
      style={[globalLayouts.tabLayout, globalColors.screenColor]}
      edges={["left", "right"]}
    >
      <View style={[styles.container]}>
        <RoundedIcon
          color="black"
          name="share-solid"
          size={SIZE_REF_10 * 4}
          style={styles.icon}
        />
        <ConfiguredFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.listContentContainer}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={itemSeparator}
          getItemLayout={itemLayout}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "84%",
    flex: 1,
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: SIZE_REF_10,
    borderLeftWidth: 1,
    borderLeftColor: "#D1CBCB",
  },
  icon: {
    left: -SIZE_REF_10 * 2,
    marginBottom: SIZE_REF_8,
  },
  listContentContainer: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
});

export default ShareTab;
