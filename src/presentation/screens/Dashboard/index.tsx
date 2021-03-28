import React, { useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard() {
  const { navigate } = useNavigation();

  const onOpen = useCallback(() => {
    navigate("SignIn");
  }, [navigate]);

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
}
