import React from "react";
import { ImageBackgroundBase, StyleSheet, Text, TouchableNativeFeedback, View, Pressable, Image } from 'react-native';
import { useFonts } from 'expo-font';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from "./Button";

const Login = ({ handleLogin }) => {

    const icon = <FontAwesome name="google" style={{fontSize: 30}}/>

    const [loaded] = useFonts({
        PoppinsBlack: require('./fonts/Poppins-Black.ttf'),
        PoppinsLight: require('./fonts/Poppins-Medium.ttf'),
      });
    
      if (!loaded) {
        return null;
      }

    return (
        <View style={styles.login_container}>

            <Image style={styles.login_logo} source={require('./img/logo_glow.png')}/>

            <Text style={styles.login_heading}>WeedStats</Text>
                <View style={{height: 100}}></View>
            <Button fontColor={"#1E1E1E"} icon={icon} title={"Mit Google Anmelden"} borderradius={100} color={"white"} onPress={handleLogin} hovercolor={"rgba(0,0,0,0.3)"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    login_container: {
        justifyContent: "center",
        backgroundColor: "#1E1E1E",
        alignItems: "center",
        height: "100%"
    },
    login_heading: {
        color: "white",
        fontSize: 50,
        fontFamily: "PoppinsBlack",
        textAlign: "center",
        marginTop: -30
    },
    login_pressable: {
        borderWidth: 2,
        borderRadius: 100,
        width: 300,
        height: 60,
        justifyContent: "center",
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        overflow: "hidden"
    },
    login_pressable_text: {
        color: "white",
        alignSelf: "center",
        fontFamily: "PoppinsLight",
        fontSize: 18,
        color: "#1E1E1E"
    },
    login_logo: {
        width: 280,
        height: 280
    }
});

export default Login