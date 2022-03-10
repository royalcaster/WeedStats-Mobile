import React from 'react';
import { useRef, useEffect } from 'react';
import { StyleSheet, Image, View, Text, Pressable, Animated, Easing, Dimensions, BackHandler} from 'react-native';
import ReactDOM from "react-dom";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import uuid from 'react-native-uuid'

import { useFonts } from 'expo-font';

const Donation = ( { onexit } ) => {

    /* const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "1",
              },
            },
          ],
        });
    } */

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const window_height = Dimensions.get("window").height;

    useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          easing: Easing.bezier(0,1.02,.21,.97),
          useNativeDriver: true,
        }).start();
        Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 200,
            easing: Easing.bezier(0,1.02,.21,.97),
            useNativeDriver: true,
          }).start();
      }, [fadeAnim, opacityAnim]);

    const [loaded] = useFonts({
        PoppinsBlack: require('./fonts/Poppins-Black.ttf'),
        PoppinsLight: require('./fonts/Poppins-Light.ttf')
    });

    // Call back function when back button is pressed
    const backActionHandler = () => {
        hide();
        return true;
    };

    useEffect(() => {

        // Add event listener for hardware back button press on Android
        BackHandler.addEventListener("hardwareBackPress", backActionHandler);
    
        return () =>
          // clear/remove event listener
          BackHandler.removeEventListener("hardwareBackPress", backActionHandler);
      }, []);
    
    const hide = () => {
        Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(({finished}) => {
            if (finished) {
                onexit();
            }
        });
    }

    return (
        <Animated.View style={[{transform: [{scale: fadeAnim}], opacity: opacityAnim, height: window_height + 20},styles.container]}>

            <View style={{height: 50}} />

            <Pressable onPress={onexit} style={({pressed}) => [{backgroundColor: pressed ? "#242424" : "#1E1E1E+"}, styles.pressable_back]}>
                <MaterialIcons name="arrow-back" style={styles.icon_back}/>
            </Pressable>

            
           
                <View style={{height: 80}} />
                <Image source={require('./img/Dön.png')} style={styles.image}></Image>
                <View style={{height: 50}} />
                <Text style={styles.text}>Du feierst <Text style={[styles.text, styles.bold]}>WeedStats</Text> und willst das Projekt weiterbringen?</Text>
                <View style={{height: 10}} />
                <Text style={[styles.text]}>Gib uns einen Döner aus!</Text>

                <Pressable onPress={hide} style={({pressed}) => [{backgroundColor: pressed ? "#292929" : "#1E1E1E"},styles.close_text]}>
                </Pressable>

        </Animated.View>
    )
}

export default Donation

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#1E1E1E",
        flexDirection: "column",
        flex: 1,
        position: "absolute",
        zIndex: 21
    },
    text: {
        alignSelf: "center",
        fontFamily: "PoppinsLight",
        fontSize: 18,
        color: "white",
        maxWidth: 200,
        textAlign: "center"
    },
    bold: {
        fontFamily: "PoppinsBlack"
    },
    image: {
        height: 150,
        width: 200,
        alignSelf: "center"
    },
    close: {
        color: "#696969",
        fontSize:40,
        position: "relative",
    },
    close_text: {
        marginLeft: 20,
        borderRadius: 15,
        position: "absolute",
        bottom: 20
    },
    cancelButton: { 
        width: "80%",
        alignSelf: "center",
        height: 50,
        borderRadius: 100,
        justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 20
    },
    cancel_icon: {
        fontSize: 25,
        color: "white",
        textAlignVertical: "center",
    },
    pressable_back: {
        width: 80, 
        padding: 10, 
        borderRadius: 25, 
        marginLeft: 10
    },
    icon_back: {
        color: "white", 
        fontSize: 30, 
        left: 5
    },
});