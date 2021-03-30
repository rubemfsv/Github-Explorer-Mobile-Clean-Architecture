import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../../../presentation/components";
import FeatherIcon from "react-native-vector-icons/Feather";
import { UserModel } from "@/domain/models";

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
      <View style={styles.bodyContainer}></View>
      <View style={styles.buttonContainer}>
        <Button onPress={handlePress}>
          <>
            <FeatherIcon name={"search"} style={styles.searchIcon} />
            {"  "}
            <Text>Back</Text>
          </>
        </Button>
      </View>
    </View>
  );
};

export default Home;
