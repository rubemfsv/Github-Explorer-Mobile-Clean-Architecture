import React, { useState, useRef, useEffect } from "react";
import { TextInputProps } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FeatherIcon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
  placeholder?: string;
  getInputValue: (text: string) => void;
}

const Input: React.FC<IInputProps> = ({
  name,
  getInputValue,
  placeholder,
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
    <View style={styles.container}>
      <FeatherIcon
        style={styles.icon}
        name={icon}
        color={blurred || state.length > 0 ? "#ff9000" : "#666360"}
      />
      <TextInput
        style={styles.textInput}
        ref={inputElementRef}
        placeholderTextColor="#666360"
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
