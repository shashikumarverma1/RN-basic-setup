import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { Button } from "./buttons/button";
const windowWidth = Dimensions.get("window").width;

export const VerticleCard = (
  {
    //   bgcolor,
    //   color,
    //   text,
    //   borderRadius,
    //   bordercolor,
    //   justify,
    //   fn,
    //   width,
    //   height,
    //   textsize
  }
) => {
  return (
    <ScrollView  horizontal={true}>   
    {
        [1,1,1,1,1,1,].map((e, i)=>{
            return (
                <View
                key={i}
                style={{ width: 200 , margin:10}}
                //    style={styles.user}
              >
                <Image
                  style={{ width: 200, height: 200 , marginBottom:10 }}
                  resizeMode="cover"
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              
               {/* <Button
        bgcolor="green"
        color="red"
        borderRadius={15}
        justify="center"
        text="signin"
        textsize={18}
        bordercolor="red"
        fn={() => console.log('click')}
        width=''
        height=''
      /> */}
              </View>
            )
        })
    }
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
