import React, { useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function SignIn() {
  const { navigate } = useNavigation();

  const onOpen = useCallback(() => {
    navigate("Dashboard");
  }, [navigate]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerHeader}>
          <Text style={styles.screenTitle}>SignIn</Text>
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
