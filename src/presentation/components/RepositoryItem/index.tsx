import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { RectButton } from "react-native-gesture-handler";

type RepositoryItemProps = {
  repository: any;
};

const RepositoryItem: React.FC<RepositoryItemProps> = ({
  repository,
}: RepositoryItemProps) => {
  return (
    <View style={styles.repositoryContainer}>
      <RectButton onPress={() => {}} style={styles.recButtonContainer}>
        <Text style={styles.recButtonText}>{repository.item.name}</Text>
      </RectButton>
    </View>
  );
};

export default RepositoryItem;
