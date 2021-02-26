import { RevealFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import InputTime from '../components/InputTime';

import {TextInput} from 'react-native';

export default function TabFiveScreen() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>RECORD EXERCISE</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/TabFiveScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftAligned: {

  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000000",

    alignContent: 'flex-start',
  },

  separator: {
    marginVertical: 50,
    height: 1,
    width: '30%',
  },

  timeInput: {
    fontSize: 70,
    fontWeight: 'bold',
    color: "#00000",

    alignContent: 'center',

    backgroundColor: "#9B00E3",
    borderRadius: 15,
  },

});
