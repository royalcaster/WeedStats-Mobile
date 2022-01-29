import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  SnapshotViewIOSBase,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Image,
  Pressable,
} from "react-native";

import toGermanDate from "../DateConversion";

import AntDesign from "react-native-vector-icons/AntDesign";

import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";

const HistoryTable = ({ event, showOnMap }) => {
  const [loaded] = useFonts({
    PoppinsBlack: require("./fonts/Poppins-Black.ttf"),
    PoppinsLight: require("./fonts/Poppins-Light.ttf"),
  });

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        marginBottom: 15,
        paddingTop: 15,
        borderTopColor: "#121212",
        borderTopWidth: 0,
      }}
    >
      <View style={{ flex: 1 }}>
        {event.type == "joint" ? (
          <Image style={styles.j_img} source={require("./img/joint.png")} />
        ) : null}
        {event.type == "bong" ? (
          <Image style={styles.b_img} source={require("./img/bong.png")} />
        ) : null}
        {event.type == "vape" ? (
          <Image style={styles.v_img} source={require("./img/vape.png")} />
        ) : null}
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Text style={styles.date}>
          {" "}
          <Fontisto name="date" style={styles.icon_date} />{" "}
          {toGermanDate(new Date(event.timestamp))}
        </Text>
      </View>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Text style={styles.time}>
          {" "}
          <Ionicons name="time-outline" style={styles.icon_time} />{" "}
          {new Date(event.timestamp).toLocaleTimeString("de-DE")}
        </Text>
      </View>
      <View style={{ flex: 1.5, borderRadius: 30 }}>
        <Pressable
          style={({ pressed }) => [
            {
              alignItems: "center",
              backgroundColor: pressed ? "#1a1a1a" : "#1E1E1E",
              flex: 1,
              justifyContent: "center",
              borderRadius: 30,
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderColor: "#9c9c9c",
            },
          ]}
          onPress={() => showOnMap(event)}
        >
          <AntDesign
            name="enviromento"
            style={{
              color: "#c4c4c4",
              fontSize: 25,
              textAlignVertical: "center",
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HistoryTable;

const styles = StyleSheet.create({
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: "#2b2b2b",
  },
  TableText: {
    margin: 10,
    color: "white",
    fontFamily: "PoppinsLight",
  },
  j_img: {
    height: 50,
    width: 15,
    alignSelf: "center",
  },
  b_img: {
    height: 50,
    width: 30,
    alignSelf: "center",
  },
  v_img: {
    height: 50,
    width: 30,
    alignSelf: "center",
  },
  date: {
    textAlign: "center",
    fontFamily: "PoppinsLight",
    fontSize: 15,
    color: "#9c9c9c",
    alignSelf: "center",
  },
  time: {
    textAlign: "center",
    fontFamily: "PoppinsLight",
    fontSize: 15,
    color: "#9c9c9c",
  },
  icon_date: {
    fontSize: 20,
    color: "#c4c4c4",
  },
  icon_time: {
    fontSize: 24,
    color: "#c4c4c4",
  },
});
