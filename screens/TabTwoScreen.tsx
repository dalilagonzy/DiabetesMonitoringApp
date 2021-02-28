
// This is the food page

import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet,  TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Button} from '../components/button';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
//import foodTracker from '../components/foodTracker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Tracking Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button/>
      <Input placeholder='BASIC INPUT' />
      <Input
   placeholder="Comment"
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   style={textBoxStyle.textBox}/>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const textBoxStyle = StyleSheet.create({
      textBox: {
         backgroundColor: 'white',
         borderBottomColor: '#000000',
         borderBottomWidth: 1, }
      }
     )

