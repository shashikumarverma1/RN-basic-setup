import { useState } from "react";
import { TextInput, View  , Text, Pressable , StyleSheet} from "react-native";

export const Dashboard = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Handle login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
   <View>
    <Text style={{paddingTop:50}}>
        wow
    </Text>
    <Pressable onPress={() => navigation.openDrawer()}>
            <Text style={{textAlign:"center"}}>
                open
            </Text>
          </Pressable>
   </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    label: {
      marginBottom: 5,
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
  });
  