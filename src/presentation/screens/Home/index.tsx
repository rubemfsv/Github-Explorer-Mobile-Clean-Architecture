import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Button, Input } from "../../../presentation/components";
import FeatherIcon from "react-native-vector-icons/Feather";

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
        <Button
          onPress={searchUser ? () => handlePress(searchUser) : undefined}
          enabled={searchUser ? true : false}
        >
          <>
            <FeatherIcon name={"search"} style={styles.searchIcon} />
            {"  "}
            <Text>Search</Text>
          </>
        </Button>
      </View>
    </View>
  );
};

export default Home;
