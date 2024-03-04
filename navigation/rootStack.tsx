import { createStackNavigator } from '@react-navigation/stack';

import DraweNavigation from './drawerNavigation';
import { Login, Signup } from '../screens';




const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="DraweNavigation" component={DraweNavigation} /> */}
        

    

      
    </Stack.Navigator>
  );
}
export default RootStack;