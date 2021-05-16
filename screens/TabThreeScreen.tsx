// This is the homepage
// we want this page to be able to link to all of the other pages
// via circular buttons that have the pages names
// and represent the page colors

import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { TabThreeParamList } from '../types';
import { Text, View } from '../components/Themed';

type TabThreeNavigationProps = StackNavigationProp<TabThreeParamList, "TabThreeScreen">;
interface TabThreeScreenProps {
  navigation: TabThreeNavigationProps;
}

const TabThreeScreen: React.FunctionComponent<TabThreeScreenProps> = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <TouchableOpacity style={styles.PinkCircleShapeView} onPress={() => { navigation.navigate("TabOneScreen") }}>
        <Text style={styles.tracking}>Sugar Level {'\n'}Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.CyanCircleShapeView} onPress={() => { navigation.navigate("TabFourScreen") }}>
        <Text style={styles.tracking}>Coach{'\n'}Page</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.PurpleCircleShapeView} onPress={() => { navigation.navigate("TabFiveScreen") }}>
        <Text style={styles.tracking}>Exercise {'\n'}Tracking</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.GrayCircleShapeView} onPress={() => { navigation.navigate("ProfileScreen") }}>
        <Text style={styles.tracking}>Your {'\n'}Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.GreenCircleShapeView} onPress={() => { navigation.navigate("TabTwoScreen") }}>
        <Text style={styles.tracking}>Food {'\n'}Tracking</Text>
      </TouchableOpacity>
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

export default TabThreeScreen;
