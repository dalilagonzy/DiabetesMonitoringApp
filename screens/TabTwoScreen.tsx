
// This is the food page

import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet,  TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../components/button';
import { Text, View } from '../components/Themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableWithoutFeedback, Keyboard } from 'react-native'


export default function TabTwoScreen() {
  return (
    <DismissKeyboard>
    <View style={styles.container}>
       <Text style={styles.title}>Food Tracking Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button/>

      <View style={styles.miniSeparator} />

      <TextInput 
      multiline
      maxLength = {150}
      style={textBoxStyle.textBox}
      placeholder='BASIC INPUT'
      />
      
     </View>
     </DismissKeyboard>
    );
}

type DismissKeyboardProps = {
  children: React.ReactNode;
}

const DismissKeyboard = ({children}: DismissKeyboardProps) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

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
  miniSeparator: {
  marginVertical: 10,
  width: '80%', 
  }
});

const textBoxStyle = StyleSheet.create({
      textBox: {
        backgroundColor: '#96EB9D',
        textAlignVertical: 'center',
        borderRadius: 15,
        alignItems: 'center',
        padding: 20,
        flexBasis: 100,
        width: 350,
        }
      }
     )

