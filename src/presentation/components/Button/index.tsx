import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

import { styles } from "./styles";

interface ButtonProps extends RectButtonProperties {
  children: any;
  test_id?: string;
}

const Button: React.FC<ButtonProps> = ({ children, test_id, ...rest }) => {
  return (
    <RectButton {...rest} style={styles.container} testID={test_id}>
      <Text style={styles.buttonText}>{children}</Text>
    </RectButton>
  );
};

export default Button;
