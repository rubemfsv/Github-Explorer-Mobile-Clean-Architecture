import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";
import { GithubListEnums } from "../../../domain/enums";
import { variantGithubEndpointTypeSingularRender } from "../../utils";
import { Button } from "../../components";

import { styles } from "./styles";

type ItemDetailsTypes = {};

interface IRouteParams {
  itemData: any;
  type: GithubListEnums;
}

const ItemDetails: React.FC<ItemDetailsTypes> = ({}: ItemDetailsTypes) => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const routeParams = params as IRouteParams;
  const { itemData, type } = routeParams;

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.screenTitle}>
          {(type === GithubListEnums.GIST ||
            type === GithubListEnums.REPOSITORY) &&
            variantGithubEndpointTypeSingularRender[type]}{" "}
          Details
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.presentationContainer}>
          <Text style={styles.nameText}>
            {type === GithubListEnums.GIST &&
              (itemData.description || "Gist with no description")}
            {type === GithubListEnums.REPOSITORY && itemData.name}
          </Text>
          <Text style={styles.companyText}>Owner: @{itemData.owner.login}</Text>
        </View>
        {type === GithubListEnums.REPOSITORY && (
          <View style={styles.descriptionRepositoryContainer}>
            <Text style={styles.descriptionRepositoryText}>
              {type === GithubListEnums.REPOSITORY &&
                (itemData.description || "Repository with no description.")}
            </Text>
          </View>
        )}
        <View style={styles.statisticContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabContainer}
          >
            {type === GithubListEnums.GIST && (
              <View style={styles.tabItem}>
                <Text style={styles.tabTitle}>Comments</Text>
                <Text style={styles.tabNumber}>{itemData.comments}</Text>
              </View>
            )}
            {type === GithubListEnums.REPOSITORY && (
              <>
                <View style={styles.tabItem}>
                  <Text style={styles.tabTitle}>Stars</Text>
                  <Text style={styles.tabNumber}>
                    {itemData.stargazers_count}
                  </Text>
                </View>
                <View style={styles.tabItem}>
                  <Text style={styles.tabTitle}>Watchers</Text>
                  <Text style={styles.tabNumber}>
                    {itemData.watchers_count}
                  </Text>
                </View>
                <View style={styles.tabItem}>
                  <Text style={styles.tabTitle}>Forks</Text>
                  <Text style={styles.tabNumber}>{itemData.forks_count}</Text>
                </View>
                <View style={styles.tabItem}>
                  <Text style={styles.tabTitle}>Open Issues</Text>
                  <Text style={styles.tabNumber}>
                    {itemData.open_issues_count}
                  </Text>
                </View>
              </>
            )}
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

export default ItemDetails;
