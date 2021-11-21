import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EntityInfo from "../components/global/EntityInfo";
import { SIZE_REF_16, SIZE_REF_8 } from "../utility/constants";
import { globalColors, globalLayouts } from "../utility/styles";
import { ConfiguredFlatList } from "../utility/ui";

const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const renderItem = () => {
  const width = Math.floor(Math.random() * 300 + 200);
  const height = Math.floor(Math.random() * 300 + 200);

  return (
    <EntityInfo
      primaryText="roybond007"
      secondaryText="subham"
      url={"https://source.unsplash.com/random/" + width + "x" + height}
      size={3 * SIZE_REF_16}
      style={{ marginBottom: SIZE_REF_8 }}
    />
  );
};

const keyExtractor = (_: any, index: number) => "item" + index;

const UserList = () => {
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

export default UserList;
