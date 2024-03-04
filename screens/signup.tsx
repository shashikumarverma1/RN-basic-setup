import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };
const navigation : any =useNavigation()
  return (
    <View style={{}}>
      {isLogin ? (
        <>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Enter your username"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="Enter your password"
          />
          <Button title="Login" onPress={handleLogin} />
          <Button title="Switch to Signup" onPress={() => setIsLogin(false)} />
        </>
      ) : (
        <>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
            placeholder="Enter your username"
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="Enter your password"
          />
          <Button title="Signup" onPress={handleSignup} />
          {/* <Button title="Switch to Login" onPress={() => setIsLogin(true)} /> */}
          <Pressable onPress={() => navigation.openDrawer()}>
            <Text style={{textAlign:"center"}}>
                wow
            </Text>
          </Pressable>
        </>
      )}
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


