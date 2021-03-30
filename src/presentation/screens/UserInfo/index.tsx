import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { RectButton, ScrollView } from "react-native-gesture-handler";

import { Button } from "../../../presentation/components";
import { UserModel } from "../../../domain/models";

import { styles } from "./styles";
import {
  ILoadUserFollowersList,
  ILoadUserFollowingList,
  ILoadUserRepositoryToList,
} from "@/domain/usecases";

type UserInfoTypes = {
  loadUserRepositoryList: (user: string) => ILoadUserRepositoryToList;
  loadUserFollowingList: (user: string) => ILoadUserFollowingList;
  loadUserFollowersList: (user: string) => ILoadUserFollowersList;
};

interface IRouteParams {
  userData: UserModel;
}

const UserInfo: React.FC<UserInfoTypes> = ({
  loadUserRepositoryList,
}: UserInfoTypes) => {
  const { navigate, goBack } = useNavigation();
  const { params } = useRoute();
  const routeParams = params as IRouteParams;
  const { userData } = routeParams;

  const handleBack = useCallback(() => {
    goBack();
  }, [navigate]);

  const handleSearchPublicRepos = useCallback((userAccount: UserModel) => {
    try {
      loadUserRepositoryList(userAccount.login)
        .loadAll()
        .then((response) => {
          navigate("SearchResult", { searchResult: response });
        })
        .catch((error) => console.log("errorrhe", error));
    } catch (error) {
      console.log("catch", error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.screenTitle}>Github Explorer</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.avatarAndPresentationContainer}>
          <Image
            style={styles.avatarImage}
            source={{ uri: userData.avatar_url }}
          />
          <View style={styles.presentationContainer}>
            <Text style={styles.nameText}>{userData.name}</Text>
            <Text style={styles.companyText}>{userData.company}</Text>
          </View>
        </View>
        <View style={styles.statisticContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabContainer}
          >
            <RectButton
              style={styles.tabItem}
              onPress={() => handleSearchPublicRepos(userData)}
            >
              <Text style={styles.tabTitle}>Public Repos</Text>
              <Text style={styles.tabNumber}>{userData.public_repos}</Text>
            </RectButton>
            <RectButton style={styles.tabItem}>
              <Text style={styles.tabTitle}>Public Gists</Text>
              <Text style={styles.tabNumber}>{userData.public_gists}</Text>
            </RectButton>
            <RectButton style={styles.tabItem}>
              <Text style={styles.tabTitle}>Followers</Text>
              <Text style={styles.tabNumber}>{userData.followers}</Text>
            </RectButton>
            <RectButton style={styles.tabItem}>
              <Text style={styles.tabTitle}>Following</Text>
              <Text style={styles.tabNumber}>{userData.following}</Text>
            </RectButton>
          </ScrollView>
        </View>
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
    </View>
  );
};

export default UserInfo;
