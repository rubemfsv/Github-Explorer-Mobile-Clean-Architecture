import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { makeHomeScreen, makeSearchResult } from "../factories/screens";

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#312E38" },
    }}
  >
    <App.Screen name="Home" component={makeHomeScreen} />
    <App.Screen name="SearchResult" component={makeSearchResult} />
  </App.Navigator>
);

export default AppRoutes;
