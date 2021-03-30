import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

import { styles } from "./styles";

interface ButtonProps extends RectButtonProperties {
  children: any;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <RectButton {...rest} style={styles.container}>
      <Text style={styles.buttonText}>{children}</Text>
    </RectButton>
  );
};

export default Button;
