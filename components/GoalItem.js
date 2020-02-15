import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={()=>props.onDelete(props.id)} activeOpacity={0.8}>
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default GoalItem;

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    marginVertical: 10
  }
});
