// This is the homepage
// we want this page to be able to link to all of the other pages
// via circular buttons that have the pages names
// and represent the page colors

import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the Home Page!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.tracking}>Sugar Level {'\n'}Tracking</Text>
      <Text style={styles.tracking}>Exercise Tracking</Text>
      <Text style={styles.tracking}>Food</Text>
      <Text style={styles.tracking}>Coach Page</Text>
      <Text style={styles.tracking}>Your Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tracking: {
    fontSize: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 25,
    textAlignVertical: 'top',
    textAlign: 'left',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
