import React from "react";
import Slider from "@react-native-community/slider";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { IconSvg, Icon } from "components/icon";
import { FormattedText } from "components/formatted-text";
import { colors } from "./common";
import Colors from "../../colors";

type Props = { next: () => void };

const ExplainStep = ({ next }: Props) => {
  return (
    <View style={styles.container}>
      <FormattedText id="body-percussion.start.title" style={styles.title} />
      <FormattedText id={"body-percussion.start.tip1"} style={styles.text} />
      <View style={styles.sliderContainer}>
        <Slider
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={colors.green}
          maximumTrackTintColor={colors.pink}
        />
      </View>
      <FormattedText id={"body-percussion.start.tip2"} style={styles.text} />
      <View style={styles.pauseContainer}>
        <Icon name="pause" size="medium" />
      </View>
      <TouchableOpacity onPress={next} style={styles.nextContainer}>
        <IconSvg name="leftArrowFill" size="medium" color={Colors[1]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: colors.brown,
  },
  title: {
    fontSize: 36,
    color: colors.green,
    paddingBottom: 15,
    paddingTop: 45,
  },
  text: {
    fontSize: 24,
    lineHeight: 24 * 1.7,
    color: colors.white,
    textAlign: "center",
    paddingHorizontal: 25,
  },
  sliderContainer: { width: 200, paddingVertical: 50 },
  pauseContainer: { flex: 1, paddingVertical: 50 },
  nextContainer: { height: 100 },
});

export default ExplainStep;
