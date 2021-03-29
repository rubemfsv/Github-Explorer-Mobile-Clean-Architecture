import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Input } from "../../../presentation/components";

type HomeTypes = {};

const Home: React.FC<HomeTypes> = ({}: HomeTypes) => {
  const { navigate } = useNavigation();
  const [searchUser, setSearchUser] = useState<string>();

  const handlePress = useCallback(
    (user: string) => {
      console.log("user", user);
      navigate("SearchResult", { githubUsername: user });
    },
    [navigate]
  );

  const getInputValue = useCallback((text: string) => {
    setSearchUser(text);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.screenTitle}>Github Explorer</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Input
          icon="user"
          placeholder="Type a valid user"
          name="Teste"
          getInputValue={getInputValue}
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
