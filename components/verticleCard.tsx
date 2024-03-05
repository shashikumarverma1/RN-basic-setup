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
        <ScrollView horizontal={true}>
           
            {
                [1, 1, 1, 1, 1, 1,].map((e, i) => {
                    return (
                        <View
                            key={i}
                            style={{ width: 200, margin: 10 }}
                        //    style={styles.user}
                        >
                            <Image
                                style={{ width: 200, height: 200, marginBottom: 10 }}
                                resizeMode="cover"
                                source={{
                                    uri: "https://reactnative.dev/img/tiny_logo.png",
                                }}
                            />

                            <View style={{ display: "flex", justifyContent: "center", flexDirection: 'row', marginBottom: 5 }}>
                                <Pressable
                                    style={{
                                        backgroundColor: "#0D88C3",
                                        height: 45,
                                        width: 200,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        borderColor: "grey"
                                    }}
                                // onPress={() => signUpHandle()}
                                >
                                    <Text style={{ color: "#ffff", fontWeight: "800" }}>Signup</Text>
                                </Pressable>

                            </View>
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
