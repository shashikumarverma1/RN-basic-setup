import { useState } from "react";
import { TextInput, View, Text, Pressable, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { Button } from "../components/buttons/button";
import { VerticleCard } from "../components/verticleCard";
import { HorizontalCard } from "../components/horizontalCard";
export const Dashboard = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <ScrollView style={{marginTop:50}}>
    
      {/* <Button
        bgcolor="grey"
        color="#ffff"
        borderRadius={5}
        justify="center"
        text="signin"
        textsize={18}
        bordercolor="green"
        fn={() => console.log("click")}
        width=''
        height=''
      /> */}
        {/* <Button
        bgcolor=""
        color="green"
        borderRadius={10}
        justify="center"
        text="signin"
        textsize={18}
        bordercolor="red"
        fn={() => navigation.openDrawer()}
        width=''
        height=''
      /> */}
      <Pressable onPress={() => navigation.openDrawer()}>
        <Text style={{ textAlign: "center" }}>open</Text>
      </Pressable>
      <VerticleCard/>
      <HorizontalCard/>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
