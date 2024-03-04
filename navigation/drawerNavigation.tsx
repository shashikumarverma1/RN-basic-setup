import { useContext } from "react";
// import { GlobalInfo } from "../context/provider";
import "react-native-gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomSidebarMenu from "../components/customSideBarMenu";
import { Dashboard, Login, Signup } from "../screens";

const Drawer = createDrawerNavigator();

function DraweNavigation() {

  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 5 },
        headerShown: false,
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
          <Drawer.Screen name="Home" component={Dashboard} />
          <Drawer.Screen name="Signup" component={Signup} />
          <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

export default DraweNavigation;
