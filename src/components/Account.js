import React from "react";
import { useEffect, useRef } from 'react'
import { View, Image, StyleSheet, Text, Pressable, Animated, Easing } from 'react-native';
import { useFonts } from 'expo-font';

const Account = ({ user, handleLogOut }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }
        ).start();
      }, [fadeAnim])

    const [loaded] = useFonts({
        PoppinsBlack: require('./fonts/Poppins-Black.ttf'),
        PoppinsLight: require('./fonts/Poppins-Light.ttf')
    });

    return (
        <Animated.View style={[{opacity: fadeAnim},styles.container]}>
            <View style={{height: 50}}></View>

            <View style={{
                alignItems: "center"
            }}>
                <Image style={styles.profile_img} source={{uri: user.photoUrl}}></Image>

                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.email}>{user.email}</Text>

                <View style={{flexDirection: "row"}}>
                <Text style={{
                    color: "#797a7a",
                    fontSize: 18,
                    fontFamily: "PoppinsLight",
                    marginTop: 20,
                    }}>Mitglied seit:</Text><View style={{width: 20}}/>
                <Text style={{
                    color: "#797a7a",
                    fontSize: 18,
                    fontFamily: "PoppinsBlack",
                    marginTop: 20,
                    }}>{user.member_since}</Text>
                </View>
            </View>
            
            <Pressable onPress={handleLogOut} style={ ({pressed}) => [{backgroundColor: pressed ? "#b32d24" : "#eb4034"},styles.signOutButton]}><Text style={{
                color: "white",
                fontSize: 18,
                fontFamily: "PoppinsLight",
                alignSelf: "center"
            }}>Abmelden</Text></Pressable>

        </Animated.View>
    );
}

export default Account

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    profile_img: {
        height: 120,
        width: 120
    },
    username: {
        color: "white",
        fontSize: 25,
        fontFamily: "PoppinsBlack",
        marginTop: 20
    },
    email: {
        color: "#797a7a",
        fontSize: 16,
        fontFamily: "PoppinsLight",
        marginTop: 0
    },
    signOutButton: { 
        width: "80%",
        alignSelf: "center",
        height: 50,
        borderRadius: 100,
        justifyContent: "center",
        marginTop: 20,
        position: "absolute",
        bottom: 20
    }
});