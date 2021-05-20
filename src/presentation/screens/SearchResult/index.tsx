import React, { useCallback } from "react";
import { View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { RepositoryModel } from "../../../domain/models";
import { Button, ItemToLoad } from "../../components";
import { variantGithubEndpointTypeRender } from "../../utils";
import { GithubListEnums } from "../../../domain/enums";
import { ILoadUserInfo } from "../../../domain/usecases";

import { styles } from "./styles";

type SearchResultTypes = {
  loadUserInfo: (user: string) => ILoadUserInfo;
};

interface IRouteParams {
  searchResult: RepositoryModel[];
  type: GithubListEnums;
}

const SearchResult: React.FC<SearchResultTypes> = ({
  loadUserInfo,
}: SearchResultTypes) => {
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
          testID="card-slide"
          style={styles.searchList}
          data={searchResult}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Text style={styles.listTitle}>Search Result</Text>
          }
          contentContainerStyle={styles.flatListBottom}
          renderItem={(item: any): any => (
            <ItemToLoad item={item} type={type} loadUserInfo={loadUserInfo} />
          )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button test_id="back_button" onPress={handleBack}>
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
