import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EntityInfo from "../components/global/EntityInfo";
import { SIZE_REF_16, SIZE_REF_8 } from "../utility/constants";
import { globalColors, globalLayouts } from "../utility/styles";
import { ConfiguredFlatList } from "../utility/ui";

const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const renderItem = () => {
  return (
    <EntityInfo
      primaryText="redlight"
      secondaryText="9M uploads"
      size={3 * SIZE_REF_16}
      style={{ marginBottom: SIZE_REF_8 }}
      name="hashtag-solid"
    />
  );
};

const keyExtractor = (_: any, index: number) => "item" + index;

const HashTagListTab = () => {
  return (
    <SafeAreaView
      edges={["left", "right"]}
      style={[globalLayouts.tabLayout, globalColors.screenColor]}
    >
      <ConfiguredFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HashTagListTab;
