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
      <Text style={styles.timeInput}>00:00</Text>

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

      <Button
        title="Save"
        color="#DA8EFF"
        onPress={() => Alert.alert('Save button pressed')}
      />
     

      <Text style={styles.temp}>Temporary</Text>
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
    backgroundColor: '#000000',
  },

  timeInput: {
    fontSize: 50,
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#DA8EFF',
  },

  containerForButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  separator: {
    marginVertical: 30,
    width: '80%',
  },
  miniSeparator: {
    marginVertical: 10,
    width: '80%',
  },

  temp: {
    fontSize: 20,
  }
});


