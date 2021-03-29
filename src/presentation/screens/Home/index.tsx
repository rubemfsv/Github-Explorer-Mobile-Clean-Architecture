import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

type HomeTypes = {};

const Home: React.FC<HomeTypes> = ({}: HomeTypes) => {
  const { navigate } = useNavigation();
  const [searchUser, setSearchUser] = useState<string>();

  const handlePress = useCallback(
    (user: string) => {
      console.log('user',user)
      navigate("SearchResult", { githubUsername: user });
    },
    [navigate]
  );

  const handleInputChange = (text: string): void => {
    setSearchUser(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.screenTitle}>Github Explorer</Text>
      </View>
      <View style={styles.bodyContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleInputChange(value)}
          value={searchUser}
          placeholder="Type a valid user"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={searchUser ? () => handlePress(searchUser) : undefined}
          activeOpacity={0.8}
          style={styles.buttonStyles}
          disabled={searchUser ? false : true}
        >
          <Text style={styles.buttonText}>Click Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
