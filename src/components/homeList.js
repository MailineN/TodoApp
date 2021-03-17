import React from "react"; 
import{StyleSheet,Text,View,FlatList} from "react-native";

const listStyles = StyleSheet.create(
    {
      listTitle :{
        fontSize : 22,
        fontWeight: "500", 
        color : "#ffff", 
        alignSelf: "center", 
        paddingVertical : 5,
      } ,
  
      listContainer: {
        paddingVertical : 10, 
        paddingHorizontal : 10, 
        borderRadius : 10, 
        alignItems: "center", 
        width : 350,
        alignSelf: "center", 
        marginVertical: 10
      },
  
      subtitle :{
        fontSize : 18,
        fontWeight: "400", 
        color : "#ffff", 
        alignSelf: "center", 
        paddingVertical : 0,
      } ,
  
      count :{
        fontSize : 20,
        fontWeight: "200", 
        color : "#ffff", 
        alignSelf: "center", 
        paddingVertical : 0,
      } , 
    }
  )

const HomeList = ({item}) => {
  const completeCount = item.subtask.filter(task => task.completed).length;
  const remainCount = item.subtask.length-completeCount;
  return (
    <View style ={[listStyles.listContainer, {backgroundColor: item.color}]}>
    <Text style = {listStyles.listTitle}> {item.text} </Text>
    
    <View> 
      <View style ={{alignItems :"center"}}>
        <Text style={listStyles.subtitle}>Remaining: <Text style={listStyles.count}>{remainCount}</Text></Text>
          
      </View>
    </View>
  </View>
  );
  }
export default HomeList;