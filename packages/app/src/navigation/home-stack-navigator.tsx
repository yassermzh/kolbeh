import React from "react";
import {
  createStackNavigator,
  StackHeaderProps,
} from "@react-navigation/stack";
import { Image, StyleSheet, View } from "react-native";
import Feed from "../pages/search";
import ChildFeed, { FeedRouteParam } from "../pages/child-feed";
import Post, { PostRouteParam } from "../pages/post";
import BackImg from "../components/icon/images/back.png";
import { Icon } from "../components/icon";
import TabNavigator from "./tab-navigator";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FormattedText } from "components/formatted-text";
import HappinessCategory from "../pages/happiness-category";
import HappinessExercise from "../pages/happiness-exercise";
import colors from "../colors";
import * as Types from "types";
import { SafeAreaView } from "react-native-safe-area-context";

export type HomeStackParamList = {
  search: undefined;
  contact: undefined;
  saved: undefined;
  post: PostRouteParam;
  home: undefined;
  parent: undefined;
  childFeed: FeedRouteParam;
  happinessCategory: { category: Types.IHappinessTrainingCategory };
  happinessExercise: { exercise: Types.IExercise };
};

const Stack = createStackNavigator<HomeStackParamList>();

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: colors.backgroundVarient,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    height: 130,
    // backgroundColor: colors.backgroundVarient,
  },
  backIcon: {
    width: 40,
    height: 84,
    borderWidth: 0,
    borderColor: "black",
  },
  back: { width: 44, height: 84, borderWidth: 0 },
  title: {
    marginHorizontal: 30,
    fontSize: 28,
    // fontWeight: 'bold',
    color: colors.secondary,
  },
});

const BackHeader = ({ navigation, scene }: StackHeaderProps) => {
  console.log({ scene });
  return (
    <SafeAreaView style={{ backgroundColor: colors.backgroundVarient }}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Image
            source={BackImg}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <FormattedText style={styles.title}>
          {
            //scene.route?.params?.exercise?.title ??
            scene.route?.params?.category?.title
          }
        </FormattedText>
      </View>
    </SafeAreaView>
  );
};

const ChildFeedBackHeader = ({ navigation, scene }: StackHeaderProps) => {
  console.log({ scene });
  return (
    <View style={styles.container2}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Image source={BackImg} style={styles.backIcon} resizeMode="contain" />
      </TouchableOpacity>
      <FormattedText
        style={styles.title}
        id={scene.route?.params?.categoryId}
      ></FormattedText>
    </View>
  );
};

const HomeNavigator = ({ navigation, route }) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? false : true) : null,
  });

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={() => ({
        animationEnabled: false,
        // headerTransparent: true,
      })}
    >
      <Stack.Screen
        name="search"
        component={Feed}
        options={{
          header: BackHeader,
          animationEnabled: false,
          // ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="post"
        component={Post}
        options={() => ({
          headerTransparent: true,
          title: "",
          headerBackTitle: () => null,
          headerLeftContainerStyle: { paddingLeft: 30, paddingTop: 20 },
          headerBackImage: () => <Icon name="backDark" size="tiny" />,
        })}
      />

      <Stack.Screen
        name="childFeed"
        component={ChildFeed}
        options={{
          headerTransparent: true,
          header: ChildFeedBackHeader,
          animationEnabled: false,
          // ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="home"
        component={TabNavigator}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="happinessCategory"
        component={HappinessCategory}
        options={{
          header: () => null,
          // animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="happinessExercise"
        component={HappinessExercise}
        options={{
          header: () => null,
          // animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
