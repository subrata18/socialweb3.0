import { createStackNavigator } from "@react-navigation/stack";
import { UtilityStackNavigatorParamList } from "../utility/types";
import React from "react";
import OthersProfileScreen from "../screens/OthersProfileScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import {
  OtherUserProfileScreenHeader,
  SearchScreenHeader,
} from "../components/global/headers";

const StackNavigator = createStackNavigator<UtilityStackNavigatorParamList>();

const UtilityStackNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="OthersProfileScreen"
        component={OthersProfileScreen}
        options={{
          header: (props) => <OtherUserProfileScreenHeader {...props} />,
        }}
      />
      <StackNavigator.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={{
          header: (props) => <SearchScreenHeader {...props} />,
        }}
      />
    </StackNavigator.Navigator>
  );
};

export default UtilityStackNavigator;
