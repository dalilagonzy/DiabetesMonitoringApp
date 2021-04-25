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
      <Text style={styles.title}>Welcome to the Home Page!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <View style={styles.PinkCircleShapeView}>
        <Text style={styles.tracking}>Sugar Level {'\n'}Tracking</Text>
      </View>
      <View style={styles.CyanCircleShapeView}>
        <Text style={styles.tracking}>Coach{'\n'}Page</Text>
      </View>
      <View style={styles.PurpleCircleShapeView}>
        <Text style={styles.tracking}>Exercise {'\n'}Tracking</Text>
      </View>
      <View style={styles.GrayCircleShapeView}>
        <Text style={styles.tracking}>Your {'\n'}Profile</Text>
      </View>
      <View style={styles.GreenCircleShapeView}>
        <Text style={styles.tracking}>Food {'\n'}Tracking</Text>
      </View>
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
    position: "absolute",
    top: 35,
    left: 20,
  },
  tracking: {
    fontSize: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: "center",
    marginTop: 50,
  },
  separator: {
    marginTop: 20,
    marginVertical: 510,
    height: 2,
    width: '80%',
  },
  PinkCircleShapeView: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    backgroundColor: '#E410A9',
    position: "absolute",
    top: 100,
    left: 20
  },
  CyanCircleShapeView: { // food tracking
    width: 150,
    height: 150,
    borderRadius: 150/2,
    backgroundColor: '#15F1E7',
    position: "absolute",
    top: 100,
    right: 20,
  },
  PurpleCircleShapeView: { // coach page
    width: 150,
    height: 150,
    borderRadius: 150/2,
    backgroundColor: '#DA8EFF',
    position: "absolute",
    top: 265,
    left: 20,
  },
  GreenCircleShapeView: { // coach page
    width: 150,
    height: 150,
    borderRadius: 150/2,
    backgroundColor: '#36CE3D',
    position: "absolute",
    top: 265,
    right: 20,
  },
  GrayCircleShapeView: { // coach page
    width: 150,
    height: 150,
    borderRadius: 150/2,
    backgroundColor: 'gray',
    position: "absolute",
    top: 430,
    left: 20,
  }
});
