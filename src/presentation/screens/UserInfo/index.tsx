import React, { useCallback, useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../../presentation/components";
import FeatherIcon from "react-native-vector-icons/Feather";
import { UserModel } from "@/domain/models";
import { FlatList, ScrollView } from "react-native-gesture-handler";

type HomeTypes = {};

interface IRouteParams {
  userData: UserModel;
}

const Home: React.FC<HomeTypes> = ({}: HomeTypes) => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const routeParams = params as IRouteParams;
  const { userData } = routeParams;

  console.log("userData", userData);

  const handlePress = useCallback(() => {
    navigate("Home");
  }, [navigate]);

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
            <View style={styles.tabItem}>
              <Text style={styles.tabTitle}>Public Repos</Text>
              <Text style={styles.tabNumber}>{userData.public_repos}</Text>
            </View>
            <View style={styles.tabItem}>
              <Text style={styles.tabTitle}>Public Gists</Text>
              <Text style={styles.tabNumber}>{userData.public_gists}</Text>
            </View>
            <View style={styles.tabItem}>
              <Text style={styles.tabTitle}>Followers</Text>
              <Text style={styles.tabNumber}>{userData.followers}</Text>
            </View>
            <View style={styles.tabItem}>
              <Text style={styles.tabTitle}>Following</Text>
              <Text style={styles.tabNumber}>{userData.following}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handlePress}>
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

export default Home;
