import React from "react";
import {StyleSheet,Text,View,FlatList,TouchableOpacity} from "react-native";
import { IconButton, Colors } from 'react-native-paper';
import HomeList from "../components/homeList";

export default class Home extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
          <View style={{ marginVertical: 1 }}></View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.divider} />
            <Text style={styles.text}>Hi <Text style={{ fontWeight: "300", color: "#046582" }}>Zachou</Text>
            </Text>
            <View style={styles.divider} />
          </View>
          <View style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style = {add} onPress = {() => this.props.navigation.navigate('AddTask')}>
              
            </TouchableOpacity>
          </View>
          <View style={{ height: 500 }}>
            <Text style={styles.addText}> Choses à faire :</Text>
            <View style={{ marginVertical: 10 }}></View>
            <FlatList
              data={data}
              keyExtractor={(item) => item.text}
              renderItem={({ item }) => <HomeList item={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: "#046582",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "800",
    color: "#000000",
    paddingHorizontal: 64,
  },
  add: {
    alignItems: "center",
    justifyContent: "center",
  },

  addText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#000000",
    alignSelf: "center",
    paddingVertical: 2,
  },
});

const data = [
  {
    id: 1,
    color: "#f39189",
    text: "Dire à Zach d'arreter Friends",
    subtask: [
      {
        title: "Lui prendre son ordinateur",
        completed: true,
      },
      {
        title: "Courir",
        completed: false,
      },
      {
        title: "Le narguer",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    color: "#bb8082",
    text: "Slay Tobi - Kadashi",
    subtask: [
      {
        title: "Lui prendre son ordinateur",
        completed: true,
      },
      {
        title: "Courir",
        completed: false,
      },
      {
        title: "Le narguer",
        completed: false,
      },
    ],
  },
  {
    id: 3,
    color: "#6e7582",
    text: "Hunt the purple rathian on MHW",
    subtask: [
      {
        title: "Eteindre l'ordinateur",
        completed: false,
      },
      {
        title: "Aller dodo",
        completed: false,
      },
    ],
  },
  {
    id: 4,
    color: "#046582",
    text: "Capture Pikachu with a simple pokeball",
    subtask: [
      {
        title: "Lancer la Pokeball",
        completed: true,
      },
    ],
  },
  {
    id: 4,
    color: "#bb8082",
    text: "I don't have any more ideas",
    subtask: [
      {
        title: "Lancer la Pokeball",
        completed: true,
      },
    ],
  },
];
