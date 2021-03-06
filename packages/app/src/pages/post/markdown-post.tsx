import React from "react";
import { StyleSheet, Animated } from "react-native";
import Markdown from "react-native-easy-markdown";
import colors from "colors";
import * as Types from "types";
import AnimatedImage from "./animated-image";
import { resolveURL } from "utils/resolve";

type Props = {
  post: Types.IPost;
};

const MarkdownPost = ({ post }: Props) => {
  const scrollAnimatedValue = React.useRef(new Animated.Value(0)).current;

  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollAnimatedValue } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={8} // target 120fps
      contentContainerStyle={styles.scrollViewContentContainer}
    >
      <Markdown
        markdownStyles={markdownStyles}
        renderImage={(src: string, alt: string, title: string, key: string) => {
          return (
            <AnimatedImage
              key={key}
              title={title}
              alt={alt}
              uri={resolveURL(src)}
              scrollAnimatedValue={scrollAnimatedValue}
            />
          );
        }}
      >
        {post.markdown.content}
      </Markdown>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingHorizontal: 30,
    backgroundColor: colors.background,
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
    // fontWeight: "bold",
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
    fontSize: 16,
    lineHeight: 2 * 16,
  },
};

export default MarkdownPost;
