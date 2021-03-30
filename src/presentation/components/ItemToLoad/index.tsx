import React from "react";
import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { GithubListEnums } from "../../../domain/enums";

import { styles } from "./styles";

type ItemToLoadProps = {
  item: any;
  type: string;
};

const ItemToLoad: React.FC<ItemToLoadProps> = ({
  item,
  type,
}: ItemToLoadProps) => {
  console.log(item);
  return (
    <View style={styles.repositoryContainer}>
      <RectButton onPress={() => {}} style={styles.recButtonContainer}>
        {type === GithubListEnums.REPOSITORY && (
          <Text style={styles.recButtonText}>{item.item.name}</Text>
        )}
        {type === GithubListEnums.GIST && (
          <Text style={styles.recButtonText}>{item.item.description}</Text>
        )}
        {(type === GithubListEnums.FOLLOWER ||
          type === GithubListEnums.FOLLOWING) && (
          <View style={styles.userContainer}>
            <Image
              style={styles.userImage}
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
