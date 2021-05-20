import React, { useCallback, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Button, Input } from "../../../presentation/components";
import { ILoadUserInfo } from "../../../domain/usecases";

import { styles } from "./styles";

type HomeTypes = {
  loadUserInfo: (user: string) => ILoadUserInfo;
};

const Home: React.FC<HomeTypes> = ({ loadUserInfo }: HomeTypes) => {
  const { navigate } = useNavigation();
  const [searchUser, setSearchUser] = useState<string>();
  const [searchError, setSearchError] = useState(false);

  const handlePress = useCallback(
    (user: string) => {
      loadUserInfo(user)
        .load()
        .then((response) => {
          navigate("UserInfo", { userData: response });
          setSearchError(false);
        })
        .catch((error) => setSearchError(true));
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
          test_id="search_user"
          icon="user"
          placeholder="Type a valid user"
          getInputValue={getInputValue}
          searchError={searchError}
        />
        {searchError && (
          <Text style={styles.errorText}>Type a valid user, please</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          test_id="search_button"
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
