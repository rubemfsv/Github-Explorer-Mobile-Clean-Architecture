import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { ScrollView } from "react-native-gesture-handler";

import { Button } from "../../components";
import { UserModel } from "../../../domain/models";

import { styles } from "./styles";

type ItemDetailsTypes = {};

interface IRouteParams {
  userData: UserModel;
}

const ItemDetails: React.FC<ItemDetailsTypes> = ({}: ItemDetailsTypes) => {
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();
  const routeParams = params as IRouteParams;
  const { userData } = routeParams;

  console.log("userData", userData);

  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

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
            <Text style={styles.nameText}>
              {userData.name || `@${userData.login}`}
            </Text>
            <Text style={styles.companyText}>{userData.company}</Text>
          </View>
        </View>
        <View style={styles.statisticContainer}></View>
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
