import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Forms } from "../screens";
import Ionicons from "@expo/vector-icons/Ionicons";
import DrawerNavigatiom from "./drawerNavigation";
import { Dashboard, Login, Signup } from "../screens";

// import RootStack from "./rootStack";
const Tab = createBottomTabNavigator();
function BottomTabs({ navigation }: { navigation: any }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        initialRouteName: "Home",
        tabBarStyle: { backgroundColor: "#fff" },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "contact") {
            iconName = focused ? "call" : "call-outline";
          } else if (route.name === "Connect") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "Menu") {
            iconName = focused ? "menu" : "menu-outline";
          } else if (route.name === "Back") {
            iconName = focused ? "arrow-back" : "arrow-back";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#272735",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen
        name="Menu"
        component={Login}
    //     listeners={() => ({
    //       tabPress: (e) => {
    //         e.preventDefault();
    //         navigation.openDrawer();
    //       },
    //     })
    // }
      />
      {/* <Tab.Screen
        name="Connect"
        component={Forms}
        initialParams={{ formType: "contact_us" }}
      /> */}
      {/* <Tab.Screen
        name="Back"
        component={RootStack}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.goBack();
          },
        })}
      /> */}
    </Tab.Navigator>
  );
}
export default BottomTabs;