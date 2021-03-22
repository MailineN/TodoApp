import React from 'react';
import { StyleSheet, Text, View, Button , KeyboardAvoidingView, TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';

import {Data} from '../data'
class AddTask extends React.Component {
  availableColors = ["#f39189","#bb8082","#6e7582","#046582"]
  state = {title : "", color : this.availableColors[0]}
  ref = firestore().collection('Task')
  
  chooseColor(){
    return this.availableColors.map(c => {
      return <TouchableOpacity key={c} style={[styles.color, {backgroundColor:c}]} onPress={() => this.setState({color : c})}/>
    })
  }
  createTodo = () => {
    const {title,color} = this.state
    this.ref.add({
      color : color, 
      title : title, 
      completed : false,
    })

    this.setState({title : ""}); 
    this.props.navigation.navigate('Home')
    
  }
  render() {
    return (
      <KeyboardAvoidingView style ={styles.container} behavior= "padding">
        <TouchableOpacity style = {{position: "absolute",top : 64, right : 32}} onPress = {() => this.props.navigation.navigate('Home')}>
        <Icon name="times" size={20} color="#046582" />
        </TouchableOpacity>
        <View style = {{alignSelf: "center"}}>
          <Text style = {styles.title}>Add new task</Text>
          <TextInput style = {styles.input} placeholder = "Name :" onChangeText={(text)=> this.setState({title: text})}/>
          <View style = {{flexDirection : "row", justifyContent : "space-evenly"}}>{this.chooseColor()}</View>
          <TouchableOpacity style = { styles.addButton,{backgroundColor: this.state.color}} onPress = {this.createTodo}>
            <Text style = {{color : "#fff", fontWeight: "500"}}> Add</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#000000",
    marginVertical: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor : "#046582", 
    borderRadius : 8,
    height : 40,
    width : 300 ,
    paddingHorizontal: 10,
    paddingVertical :10,
    fontSize: 13
  },
  color : {
    width : 25,
    height : 25, 
    borderRadius :4,
    marginVertical: 10
  },
  addButton : {
    height :100, 
    marginTop : 20, 
    borderRadius : 8, 
    paddingHorizontal: 10,
    paddingVertical :10,
    alignItems : "center", 
    justifyContent : "center",
  }

});

export default AddTask;