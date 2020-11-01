import React, { useEffect } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import colors from "colors";
import { FormattedText } from "components/formatted-text";
import Markdown from "react-native-easy-markdown";
import { resolveURL } from "utils/resolve";
import { IconSvg } from "components/icon";
import * as Types from "types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "navigation/home-stack-navigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHappiness } from "context/happiness";
import { GaussIcon } from "components/curve-icon";
import { trackEvent } from "utils/analytics";
import { Gif, IMAGES } from "../happiness-training";

const fullWidth = Dimensions.get("window").width;

const Header = ({ navigation, route }: Props) => {
  const { category } = route.params;

  return (
    <View style={styles.headerContainer}>
      <GaussIcon onPress={() => navigation.goBack()} icon="rightArrow" />
      <FormattedText style={styles.title}>{category.title}</FormattedText>
    </View>
  );
};

type Props = StackScreenProps<HomeStackParamList, "happinessCategory">;
function HappinessCategory({ navigation, route }: Props) {
  const { category } = route.params;
  const happiness = useHappiness();

  useEffect(() => {
    happiness.update();
    trackEvent("happiness-screen", { category: category.id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handlePress(exercise: Types.IExercise) {
    navigation.navigate("happinessExercise", { exercise, category });
  }

  return (
    <SafeAreaView style={styles.outerContainer}>
      <Header navigation={navigation} route={route} />
      <View style={styles.container}>
        <Markdown markdownStyles={markdownStyles}>{category.about}</Markdown>
        <View style={styles.contentContainer}>
          <View style={styles.verticalLine}>
            <View style={styles.verticalLineInner} />
          </View>
          <View style={styles.exercisesContainer}>
            {category.exercises?.map((exercise: Types.IExercise) => {
              const state = happiness.exercises[exercise.id]?.state ?? "locked";
              return (
                <TouchableOpacity
                  disabled={state === "locked"}
                  key={exercise.title}
                  onPress={() => handlePress(exercise)}
                  style={styles.exerciseContainer}
                >
                  <IconSvg
                    name={
                      state === "locked"
                        ? "lockFill"
                        : state === "done"
                        ? "tickFill"
                        : "circle"
                    }
                    size="small"
                    color={colors.backgroundPrimaryVariant}
                    style={styles.icon}
                  />
                  <FormattedText style={styles.exerciseTitle}>
                    {exercise.title}
                  </FormattedText>
                </TouchableOpacity>
              );
            })}
          </View>
          <Gif image={IMAGES[category.id]} dropShadow />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: { backgroundColor: colors.backgroundVariant, flex: 1 },
  container: { borderWidth: 0, paddingHorizontal: 30 },
  contentContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  verticalLineInner: {
    width: 5,
    backgroundColor: colors.backgroundPrimaryVariant,
    flexGrow: 1,
    left: 15,
    marginBottom: 38,
    marginTop: 5,
  },
  verticalLine: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
  },
  exercisesContainer: {},
  exerciseContainer: {
    flexDirection: "row",
    height: 60,
    zIndex: 1,
  },
  exerciseTitle: {
    color: colors.primary,
    fontSize: 18,
    paddingRight: 10,
    top: -3,
  },
  icon: {
    backgroundColor: colors.backgroundVariant,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 90,
    paddingTop: 10,
    backgroundColor: colors.backgroundVariant,
  },
  title: {
    marginHorizontal: 30,
    fontSize: 28,
    // fontWeight: 'bold',
    color: colors.secondary,
  },
});

const markdownStyles = {
  listItemBullet: {
    width: 6,
    height: 6,
    backgroundColor: colors.green,
    borderRadius: 3,
    marginRight: 10,
  },
  h1: {
    color: colors.h1,
    textAlign: "center",
    paddingVertical: 20,
    fontWeight: "bold",
    fontSize: 24,
  },
  h2: {
    color: colors.h2,
    paddingVertical: 20,
    // fontWeight: "bold",
    fontSize: 24,
  },
  h3: {
    color: colors.h3,
    paddingVertical: 20,
    // fontWeight: "bold",
    fontSize: 24,
  },
  text: {
    fontFamily: "IRANYekanRDMobile",
    textAlign: "left",
    color: colors.primary,
    fontSize: 18,
    lineHeight: 2 * 16,
  },
};

export default HappinessCategory;
