import React, { useState, useRef, useEffect } from "react";
import { TextInputProps } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FeatherIcon from "react-native-vector-icons/Feather";
import { PaletteColors } from "../../../presentation/styles/PalleteColors";

import { styles } from "./styles";

interface IInputProps extends TextInputProps {
  icon: string;
  placeholder?: string;
  getInputValue: (text: string) => void;
  searchError?: boolean;
}

const Input: React.FC<IInputProps> = ({
  getInputValue,
  placeholder,
  searchError,
  icon,
}: IInputProps) => {
  const inputElementRef = useRef<any>(null);
  const [state, setState] = useState("");
  const [blurred, setBlurred] = useState(true);

  useEffect(() => {
    try {
      getInputValue(state);
    } catch (error) {}
  }, [state]);

  const handleInputChange = (text: string): void => {
    setState(text);
  };

  return (
    <View
      style={
        blurred || state.length > 0
          ? searchError
            ? styles.containerError
            : styles.containerActive
          : styles.containerInactive
      }
    >
      <FeatherIcon
        style={
          blurred || state.length > 0
            ? searchError
              ? styles.iconError
              : styles.iconActive
            : styles.iconInactive
        }
        name={icon}
      />
      <TextInput
        style={styles.textInput}
        ref={inputElementRef}
        placeholderTextColor={PaletteColors.$paletteGrey600}
        placeholder={placeholder}
        keyboardAppearance="dark"
        defaultValue={state}
        onFocus={() => setBlurred(false)}
        onBlur={() => setBlurred(true)}
        onChangeText={(value) => {
          handleInputChange(value);
        }}
      />
    </View>
  );
};

export default Input;
