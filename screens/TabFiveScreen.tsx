import { RevealFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import * as React from 'react';
import { StyleSheet, Button, Alert, TextInput } from 'react-native';
import {useState} from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import{Input} from 'react-native-elements';

export default function TabFiveScreen() {
  const [time, setTime] = useState('00:00');
  const [description, setDescription] = useState('optional');

  return (

    <View style={styles.container}>
      
      <View style={styles.separator} />

      <Text> Please enter minutes of Exercise:</Text>
      <TextInput 
        //keyboardType = 'numeric'
        style={styles.input}
        placeholder=''
        onChangeText={(val) => setTime(val)}/>

      <View style={styles.miniSeparator} />

      <View style={styles.containerForButtons}>
        <Button
          title="Easy"
          color="#DA8EFF"
          onPress={() => Alert.alert('Easy pressed')}
        />
        <Button
          title="Medium"
          color="#DA8EFF"
          onPress={() => Alert.alert('Medium pressed')}
        />
        <Button
          title="Hard"
          color="#DA8EFF"
          onPress={() => Alert.alert('Hard pressed')}
        />
      </View>
  
      <View style={styles.miniSeparator} />

      <TextInput
        //multiline 
        style={styles.descriptionInput}
        placeholder='Optional Notes: Describe Exercise'
        onChangeText={(val) => setDescription(val)}/>

      <Button
        title="Save"
        color="#DA8EFF"
        onPress={() => Alert.alert('Save button pressed')}
      />
     
      <EditScreenInfo path="/screens/TabFiveScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'column',
  },

  input: {
    borderWidth: 1,
    borderColor: '#DA8EFF',
    padding: 8,
    width: 240,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#DA8EFF',
    height: 90,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 50,
  },

  descriptionInput: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    width: 300,
    margin: 10,
    height: 130,
  },

  timeInputText: {
    padding: 10,
    fontSize: 50,
    color: '#FFFFFF',
    alignSelf: 'center',
  },

  containerForButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  separator: {
    marginVertical: 30,
    width: '80%',
  },

  commentsInputContainer: {
    padding: 10,
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  miniSeparator: {
    marginVertical: 10,
    width: '80%',
  },

 
});


