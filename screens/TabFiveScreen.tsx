import { RevealFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import {TextInput} from 'react-native';

export default function TabFiveScreen() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>RECORD EXERCISE</Text> 
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
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    backgroundColor: '#9932CC',
    padding: 20,
  },

  temp: {
    fontSize: 20,
  }
});
