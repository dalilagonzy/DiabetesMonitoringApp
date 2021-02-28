import { RevealFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import * as React from 'react';
import { StyleSheet, Button, Alert, TextInput } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import{Input} from 'react-native-elements';

export default function TabFiveScreen() {
  return (

    <View style={styles.container}>
      
      <Text style={styles.temp}>Please enter the minutes of exercise </Text>

      <Input 
      placeholder="" 
      containerStyle={styles.timeInputContainer}
      inputStyle={styles.timeInputText}
      />

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
  
      <View style={styles.separator} />

      <Input 
      placeholder="Optional Notes: Describe Exercise" 
      containerStyle={styles.commentsInputContainer}
      inputStyle={styles.temp}
      />

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

  timeInputContainer: {
    borderRadius: 15,
    backgroundColor: '#DA8EFF',
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

  temp: {
    fontSize: 20,
    color: '#FFFFFF',
  }
});


