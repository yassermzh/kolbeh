import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/core";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { ParentStackParamList } from "navigation/parent-stack-navigator";
import * as Types from "types";
import MarkdownPost from "./markdown-post";
import ImagePost from "./image-post";
import VideoPost from "./video-post";
import Unknown from "./unkown-post";
import { Icon, IconSvg } from "components/icon";
import { useBookmarkedPosts } from "context/bookmark-posts";
import InAppPost from "components/body-percussion";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "colors";
import BackImg from "components/icon/images/back.png";

export type PostRouteParam = {
  post?: Types.IPost;
  id?: string;
};

const GET_POST = gql`
  query PostById($kooft: ID!) {
    postById(id: $kooft) {
      id
      category
      tags
      type
      images {
        id
        url
      }
      videos {
        id
        url
        cover
      }
      markdown {
        content
        cover
      }
    }
  }
`;

type PostRoute = RouteProp<ParentStackParamList, "post">;

type PostData = {
  postById: Types.IPost;
};

const PostScreen = ({ navigation }) => {
  const [
    bookmarkedPosts,
    { addToBookmarkedPosts, removeFromBookmarkedPosts },
  ] = useBookmarkedPosts();
  const route = useRoute<PostRoute>();
  const { post, id } = route.params;

  let _post;
  if (post) {
    _post = post;
  }

  const { data } = useQuery<PostData>(GET_POST, {
    variables: {
      kooft: id,
    },
    skip: !id || !!post?.id,
  });

  if (id && data) {
    _post = data.postById;
  }

  if (!_post) {
    return null;
  }

  const _id = id ?? _post.id;

  const Component = {
    inapp: InAppPost,
    image: ImagePost,
    video: VideoPost,
    markdown: MarkdownPost,
  }[_post.type];

  if (!Component) {
    return <Unknown />;
  }

  const isSaved = bookmarkedPosts.includes(_id);

  const saveButtonRendered = (
    <TouchableOpacity
      style={styles.saveContainer}
      onPress={() => {
        if (!isSaved) {
          addToBookmarkedPosts(_id);
        } else {
          removeFromBookmarkedPosts(_id);
        }
      }}
    >
      <IconSvg
        name="bookmark"
        size="small"
        color={isSaved ? colors.secondary : colors.primary}
      />
    </TouchableOpacity>
  );

  const NO_SAVE_TYPES: Types.IPostType[] = [];
  const canSave = !NO_SAVE_TYPES.includes(_post.type);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: _post.type === "video" ? "black" : colors.background,
      }}
    >
      <View style={styles.container}>
        <StatusBar hidden />
        {canSave && (
          <View style={styles.saveWrapper}>{saveButtonRendered}</View>
        )}
        <View style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={BackImg}
              style={{ width: 40, height: 84 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Component post={_post} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: "blue",
  },
  saveWrapper: {
    position: "absolute",
    alignItems: "center",
    top: 0,
    right: 0,
    zIndex: 10,
    paddingTop: 10,
    paddingHorizontal: 30,
    // borderWidth: 1,
    // borderColor: "red",
  },
  saveContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 44,
    height: 44,
    borderRadius: 44,
  },
});

export default PostScreen;
