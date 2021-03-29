import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ILoadUserRepositoryToList } from "@/domain/usecases";
import { RepositoryModel } from "@/domain/models";
import { FlatList } from "react-native-gesture-handler";
import RepositoryItem from "./RepositoryItem";

type SearchResultTypes = {
  loadUserRepositoryList: (user: string) => ILoadUserRepositoryToList;
};

interface IRouteParams {
  githubUsername: string;
}

const SearchResult: React.FC<SearchResultTypes> = ({
  loadUserRepositoryList,
}: SearchResultTypes) => {
  const { navigate } = useNavigation();
  const [searchResult, setSearchResult] = useState<RepositoryModel[]>();
  const { params } = useRoute();
  const routeParams = params as IRouteParams;
  const { githubUsername } = routeParams;

  const handlePress = useCallback(() => {
    navigate("Home");
  }, [navigate]);

  useEffect(() => {
    try {
      loadUserRepositoryList(githubUsername)
        .loadAll()
        .then((response) => setSearchResult(response))
        .catch((error) => console.log("errorrhe", error));
    } catch (error) {
      console.log("catch", error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.screenTitle}>Search Result</Text>
      </View>
      <FlatList
        style={styles.searchList}
        data={searchResult}
        keyExtractor={(repository) => repository.id}
        ListHeaderComponent={<Text style={styles.listTitle}>Repositories</Text>}
        renderItem={(repository: any): any => (
          <RepositoryItem repository={repository} />
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
