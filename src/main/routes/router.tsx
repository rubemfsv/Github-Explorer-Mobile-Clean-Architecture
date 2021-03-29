import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { makeDashboard } from "../factories/screens";

import { SignIn } from "../../presentation/screens";

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#312E38" },
    }}
  >
    <App.Screen name="Dashboard" component={makeDashboard} />
    <App.Screen name="SignIn" component={SignIn} />
  </App.Navigator>
);

export default AppRoutes;
