import React, {useState} from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType={'slide'}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={'Course Goal'}
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttomContainer}>
          <Button style={styles.button} title={'Add'} onPress={addGoalHandler}/>
          <Button style={styles.button} title={'Cancel'} color={'red'} onPress={props.onCancel}/>
        </View>
      </View>
    </Modal>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  textInputContainer:
    {flex: 1, justifyContent: 'center', alignItems: 'center'},
  input:
    {width: '80%', borderColor: 'black', borderWidth: 1, padding: 10, marginBottom: 10 },
  buttomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});
