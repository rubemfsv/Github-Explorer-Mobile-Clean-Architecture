import React, { useCallback, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ILoadUserRepositoryToList } from "@/domain/usecases";

type DashboardTypes = {
  loadUserRepositoryList: (user: string) => ILoadUserRepositoryToList;
};

const Dashboard: React.FC<DashboardTypes> = ({
  loadUserRepositoryList,
}: DashboardTypes) => {
  const { navigate } = useNavigation();

  const onOpen = useCallback(() => {
    navigate("SignIn");
  }, [navigate]);

  useEffect(() => {
    try {
      loadUserRepositoryList("rubemfsv")
        .loadAll()
        .then((response) => console.log(response))
        .catch((error) => console.log("errorrhe", error));
    } catch (error) {
      console.log("catch", error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerHeader}>
          <Text style={styles.screenTitle}>Dashboard</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onOpen}
          activeOpacity={0.8}
          style={styles.buttonStyles}
        >
          <Text style={styles.buttonText}>Click Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
