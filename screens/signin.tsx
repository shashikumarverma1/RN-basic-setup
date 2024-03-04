import { useState } from "react";
import { TextInput, View  , Text, Pressable , StyleSheet} from "react-native";

export const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Handle login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    };
  
    return (
      <View style={styles.container}>
        <Text style={{}}>Username</Text>

        <Pressable>
            <Text style={{paddingTop:150}}>open</Text>
        </Pressable>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your username"
        />
        <Text style={{}}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
       <Pressable>
        <Text>login</Text>
       </Pressable>
       <Pressable>
            <Text style={{paddingTop:100 , color:'red'}}>open</Text>
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
  