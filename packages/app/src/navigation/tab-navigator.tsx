import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HappinessTraining from "../pages/happiness-training";
import BookmarkPostsScreen from "../pages/bookmark-posts";
import ParentCategoryList from "../pages/parent-category-list";
import { TabBar } from "./menu";

export type TabParamList = {
  parent: undefined;
  bookmark: undefined;
  kolbeh: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="kolbeh"
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="bookmark" component={BookmarkPostsScreen} />
      <Tab.Screen name="parent" component={ParentCategoryList} />
      <Tab.Screen name="kolbeh" component={HappinessTraining} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
