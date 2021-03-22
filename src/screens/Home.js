import React from "react";
import {StyleSheet,Text,View,FlatList,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeList from "../components/homeList";
import {Data} from '../data'

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
            <TouchableOpacity style = {styles.add} onPress = {() => this.props.navigation.navigate('AddTask')}>
              <Icon name="dragon" size={25} color="#046582" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 500 }}>
            <Text style={styles.addText}> Choses à faire :</Text>
            <View style={{ marginVertical: 10 }}></View>
            <FlatList
              data={Data}
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
