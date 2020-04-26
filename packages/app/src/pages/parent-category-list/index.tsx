import React from "react";
import {
  View,
  RefreshControl,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/core";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import CategoryTile from "./category-tile";
import Loading from "../../components/loading";
import { ParentStackParamList } from "../../navigation/parent-stack-navigator";
import colors from "../../colors";
import * as Types from "../../types";
import { errorReport } from "../../utils/error-reporter";

const GET_PARENT = gql`
  query GetParent {
    parentCategories {
      id
      title
      description
      icon
      feed {
        pageInfo {
          hasNextPage
        }
        edges {
          node {
            id
            title
            type
            category
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
      }
    }
  }
`;

type ParentFeedNavigationProp = NavigationProp<
  ParentStackParamList,
  "parentFeed"
>;

type ParentCategoriesData = {
  parentCategories: Types.ICategories;
};

const getCategoryColor = (index: number) => {
  const rowColors = [
    { backgroundColor: colors.category1, color: colors.secondary },
    { backgroundColor: colors.category2, color: colors.secondary },
    { backgroundColor: colors.category3, color: colors.secondary },
  ];
  return rowColors[index % rowColors.length];
};

const ParentScreen = () => {
  const navigation = useNavigation<ParentFeedNavigationProp>();
  const [refreshing, setRefreshing] = React.useState(false);
  const { data, loading, refetch, error } = useQuery<ParentCategoriesData>(
    GET_PARENT
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    refetch().then(() => setRefreshing(false));
  }, [refetch]);

  if (error) {
    errorReport(error, { origin: "parent> get feed" });
    return null;
  }

  const categories: Types.ICategory[] = data ? data.parentCategories : [];

  return (
    <View
      style={{
        backgroundColor: colors.backgroundVarient,
        flex: 1,
      }}
    >
      <StatusBar hidden />
      {loading ? (
        <Loading varient />
      ) : (
        <ScrollView
          contentContainerStyle={styles.container}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <StatusBar
            backgroundColor={colors.backgroundVarient}
            barStyle="dark-content"
          />
          {categories.map((category, index) => {
            const color = getCategoryColor(index);
            return (
              <CategoryTile
                meta={color}
                key={category.id}
                category={category}
                onPress={() =>
                  navigation.navigate("parentFeed", { category, meta: color })
                }
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    paddingTop: 60,
  },
});

export default ParentScreen;
