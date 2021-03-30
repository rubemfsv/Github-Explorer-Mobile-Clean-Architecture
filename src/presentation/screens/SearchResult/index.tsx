import React, { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RepositoryModel } from "@/domain/models";
import { FlatList } from "react-native-gesture-handler";
import { ItemToLoad } from "../../components";
import { variantGithubEndpointTypeRender } from "../../utils";
import { GithubListEnums } from "@/domain/enums";

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

  const handlePress = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.screenTitle}>
          {variantGithubEndpointTypeRender[type]}
        </Text>
      </View>
      <FlatList
        style={styles.searchList}
        data={searchResult}
        keyExtractor={(repository) => repository.id}
        ListHeaderComponent={
          <Text style={styles.listTitle}>Search Result</Text>
        }
        renderItem={(repository: any): any => (
          <ItemToLoad item={repository} type={type} />
        )}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={0.8}
          style={styles.buttonStyles}
        >
          <Text style={styles.buttonText}>Back Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchResult;
