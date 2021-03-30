import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { GithubListEnums } from "../../../domain/enums";
import { ILoadUserInfo } from "../../../domain/usecases";

import { styles } from "./styles";

type ItemToLoadProps = {
  item: any;
  type: GithubListEnums;
  loadUserInfo: (user: string) => ILoadUserInfo;
};

const ItemToLoad: React.FC<ItemToLoadProps> = ({
  item,
  type,
  loadUserInfo,
}: ItemToLoadProps) => {
  const { navigate } = useNavigation();

  const handlePress = useCallback(
    (itemToNavigate: any, type: string) => {
      if (
        type === GithubListEnums.FOLLOWER ||
        type === GithubListEnums.FOLLOWER
      ) {
        const user: string = itemToNavigate.item.login;
        loadUserInfo(user)
          .load()
          .then((response) => {
            navigate("UserInfo", { userData: response });
          })
          .catch((error) => console.log(error));
      } else if (type === GithubListEnums.GIST) {
        navigate("ItemDetails", {
          itemData: item.item,
          type: GithubListEnums.GIST,
        });
        console.log(item);
      } else if (type === GithubListEnums.REPOSITORY) {
        navigate("ItemDetails", {
          itemData: item.item,
          type: GithubListEnums.REPOSITORY,
        });
      }
    },
    [navigate]
  );

  return (
    <View style={styles.repositoryContainer}>
      <RectButton
        onPress={() => handlePress(item, type)}
        style={styles.recButtonContainer}
      >
        {type === GithubListEnums.REPOSITORY && (
          <Text style={styles.recButtonText}>{item.item.name}</Text>
        )}
        {type === GithubListEnums.GIST && (
          <Text style={styles.recButtonText}>
            {item.item.description || "Gist with no description"}
          </Text>
        )}
        {(type === GithubListEnums.FOLLOWER ||
          type === GithubListEnums.FOLLOWING) && (
          <View style={styles.userContainer}>
            <Image
              style={styles.userAvatar}
              source={{ uri: item.item.avatar_url }}
            />
            <Text style={styles.recButtonText}>@{item.item.login}</Text>
          </View>
        )}
      </RectButton>
    </View>
  );
};

export default ItemToLoad;
