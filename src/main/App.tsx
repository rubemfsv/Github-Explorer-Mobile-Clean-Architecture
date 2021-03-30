import "react-native-gesture-handler";

import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { PaletteColors } from "../presentation/styles/PalleteColors";

import Routes from "./routes/router";

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={PaletteColors.$paletteGrey300} translucent />

    <View style={{ flex: 1, backgroundColor: PaletteColors.$paletteGrey300 }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
