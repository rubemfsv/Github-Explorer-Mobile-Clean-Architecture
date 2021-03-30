import React from "react";
import { View, Text } from "react-native";
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
          <Text style={styles.recButtonText}>{item.item.login}</Text>
        )}
      </RectButton>
    </View>
  );
};

export default ItemToLoad;
