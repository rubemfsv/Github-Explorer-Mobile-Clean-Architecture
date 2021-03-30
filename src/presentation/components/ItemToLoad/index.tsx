import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { GithubListEnums } from "../../../domain/enums";

type ItemToLoadProps = {
  item: any;
  type: GithubListEnums;
};

const ItemToLoad: React.FC<ItemToLoadProps> = ({
  item,
  type,
}: ItemToLoadProps) => {
  return (
    <View style={styles.repositoryContainer}>
      <RectButton onPress={() => {}} style={styles.recButtonContainer}>
        {type === GithubListEnums.REPOSITORY && (
          <Text style={styles.recButtonText}>{item.item.name}</Text>
        )}
        {type === GithubListEnums.GIST && (
          <Text style={styles.recButtonText}>{item.item.description}</Text>
        )}
      </RectButton>
    </View>
  );
};

export default ItemToLoad;
