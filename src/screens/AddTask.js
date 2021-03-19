import React from 'react';
import { StyleSheet, Text, View, Button , KeyboardAvoidingView, TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
class AddTask extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style ={styles.container} behavior= "padding">
        <TouchableOpacity style = {{position: "absolute",top : 64, right : 32}} onPress = {() => this.props.navigation.navigate('Home')}>
        <Icon name="times" size={20} color="#046582" />
        </TouchableOpacity>
        <View style = {{alignSelf: "center"}}>
          <Text style = {styles.title}>Add new task</Text>
          <TextInput style = {styles.input} placeholder = "Name"/>
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
  }
});

export default AddTask;