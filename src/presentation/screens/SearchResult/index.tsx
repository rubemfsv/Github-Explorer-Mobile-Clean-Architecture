import React, { useCallback } from "react";
import { View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RepositoryModel } from "@/domain/models";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Button, ItemToLoad } from "../../components";
import { variantGithubEndpointTypeRender } from "../../utils";
import { GithubListEnums } from "@/domain/enums";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

type SearchResultTypes = {};

interface IRouteParams {
  searchResult: RepositoryModel[];
  type: GithubListEnums;
}

const SearchResult: React.FC<SearchResultTypes> = ({}: SearchResultTypes) => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const routeParams = params as IRouteParams;
  const { searchResult, type } = routeParams;

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.screenTitle}>
            {variantGithubEndpointTypeRender[type]}
          </Text>
        </View>
        <FlatList
          style={styles.searchList}
          data={searchResult}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Text style={styles.listTitle}>Search Result</Text>
          }
          contentContainerStyle={styles.flatListBottom}
          renderItem={(item: any): any => (
            <ItemToLoad item={item} type={type} />
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleBack}>
          <>
            <FeatherIcon name={"arrow-left"} style={styles.backIcon} />
            {"  "}
            <Text>Back</Text>
          </>
        </Button>
      </View>
    </>
  );
};

export default SearchResult;
