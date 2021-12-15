import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { SnapshotViewIOSBase, StyleSheet, View, Text, Image, Pressable } from "react-native";

import AntDesign from 'react-native-vector-icons/AntDesign'

import { ref, onValue, query, limitToLast } from "firebase/database";
import { db } from "./FirebaseConfig";
import { Timestamp } from "firebase/firestore";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'

let data = [
  ["-", "-", "-", "-", "[X]"],
  ["-", "-", "-", "-", "[X]"],
  ["-", "-", "-", "-", "[X]"],
  ["-", "-", "-", "-", "[X]"],
  ["-", "-", "-", "-", "[X]"],
  ["-", "-", "-", "-", "[X]"],
  ["-", "-", "-", "-", "[X]"],
  ["-", "-", "-", "-", "[X]"],
  ["-", "-", "-", "-", "[X]"],
  ["-", "-", "-", "-", "[X]"],
];

const HistoryTable = ({ user, history }) => {
  const [loaded] = useFonts({
    PoppinsBlack: require("./fonts/Poppins-Black.ttf"),
    PoppinsLight: require("./fonts/Poppins-Light.ttf"),
  });

  /*
  const dbUserRef = query(ref(db, "users/" + user.username), limitToLast(10));

  let i = 9;

  //Orignal
   onValue(dbUserRef, (snapshot) => {
    snapshot.forEach((daten) => {
      data[i][0] = daten.val().number;
      data[i][1] = daten.val().type;
      data[i][2] = new Date(daten.val().timestamp).toLocaleDateString("de-DE");
      data[i][3] = new Date(daten.val().timestamp).toLocaleTimeString("de-DE");
      i > 0 ? i-- : (i = 9);
    });
  }); 

   onValue(dbUserRef, (snapshot) => {
    snapshot.forEach((daten) => {
      history.push({
        number: daten.val().number,
        type: daten.val().type,
        date: new Date(daten.val().timestamp).toLocaleDateString("de-DE"),
        time: new Date(daten.val().timestamp).toLocaleTimeString("de-DE")
      });
    });
  });

  const headData = ["Nr.", "Typ", "Datum", "Uhrzeit", "Löschen"];
*/


  return (
    <>
      {
        history.map( (event) => 
            <View key={Math.random()} style={{flexDirection: "row", width: "100%", marginBottom: 18, paddingTop: 18, borderTopColor: "#121212", borderTopWidth: 0}}>
             {/*  <Text style={{flex: 1}}>{event.number}</Text> */}
             <View style={{flex: 1}}>
                {event.type == "joint" ? <Image style={styles.j_img} source={require('./img/joint.png')}/> : null }
                {event.type == "bong" ? <Image style={styles.b_img} source={require('./img/bong.png')}/> : null }
                {event.type == "vape" ? <Image style={styles.v_img} source={require('./img/vape.png')}/> : null }
              </View>
              <View style={{flex: 2, justifyContent: "center"}}>
                <Text style={styles.date}> <Fontisto name="date" style={styles.icon_date}/> {event.date}</Text>
              </View>
              <View style={{flex: 2, justifyContent: "center"}}>
                <Text style={styles.time}> <Ionicons name="time-outline" style={styles.icon_time}/> {event.time}</Text>
              </View>
              <View style={{flex: 2, borderRadius: 30}}>
                <Pressable style={({pressed}) => [{alignItems: "center",  backgroundColor: pressed ? "#1a1a1a" : "#1E1E1E", flex: 1, justifyContent: "center", borderRadius: 30}]}>
                  <AntDesign name="delete" style={{color: "#eb4034", fontSize: 25, textAlignVertical: "center"}}/> 
                </Pressable>
              </View>
            </View>
        )

      //Originaltabelle
      /* <Table borderStyle={{ borderWidth: 1, borderColor: "#0080FF" }}>
        <Row
          data={headData}
          style={styles.HeadStyle}
          textStyle={styles.TableText}
        />
        <Rows data={data} textStyle={styles.TableText} />
      </Table> */}
    </>
  );
};

export default HistoryTable;

const styles = StyleSheet.create({
  HeadStyle: {
    height: 50,
    alignContent: "center",
  },
  TableText: {
    margin: 10,
    color: "white",
  },
  j_img: {
    height: 50,
    width: 15,
    alignSelf: "center"
  },
  b_img: {
    height: 50,
    width: 30,
    alignSelf: "center"
  },
  v_img: {
    height: 50,
    width: 30,
    alignSelf: "center"
  },
  date: {
    textAlign: "center",
    fontFamily: "PoppinsLight",
    color: "#9c9c9c",
    alignSelf: "center",
  },
  time: {
    textAlign: "center",
    fontFamily: "PoppinsLight",
    color: "#9c9c9c",
  },
  icon_date: {
    fontSize: 15,
    position: "absolute"

  },
  icon_time: {
    fontSize: 18,
  }
});
