import { RevealFromBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFiveScreen() {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>RECORD EXERCISE</Text>
      <View style={styles.separator} />
      <Text style={styles.timeInput}>00:00</Text>
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
    color: "#FFF",

    alignContent: 'flex-start',

    backgroundColor: "#9B00E3",
    paddingTop: 15,
    paddingBottom: 5,
    paddingRight: 50,
    paddingLeft: 15,
  },
  separator: {
    marginVertical: 50,
    height: 1,
    width: '30%',
  },

  timeInput: {
    fontSize: 70,
    fontWeight: 'bold',
    color: "#FFF",

    alignContent: 'center',

    backgroundColor: "#9B00E3",
    borderRadius: 15,
  },

});
