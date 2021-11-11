import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { GAP_SIZE_REF_8, SIZE_REF_16 } from "../utility/constants/appConstants";
import { globalColors } from "../utility/style/colors";
import { globalLayouts } from "../utility/style/layout";
import EntityInfo from "./global/EntityInfo";

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
      style={{ marginBottom: GAP_SIZE_REF_8 }}
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
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContentContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
  },
  listContentContainer: {
    padding: GAP_SIZE_REF_8,
  },
});

export default UserList;
