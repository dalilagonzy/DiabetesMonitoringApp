import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native';
// import { useLinkProps } from '@react-navigation/native';

export function Button(){
  


return(
  <TouchableOpacity onPress={_onPressButton}>
  <View style={buttonStyle.button}>
    <Text style={buttonStyle.buttonText}>Click here to log in food input</Text>
   </View>
</TouchableOpacity>
);

}

function _onPressButton(){
  alert('You tapped the button!');
}

// const CustomButton = () => {
// <TouchableOpacity onPress={this._onPressButton}>
//   <View style={buttonStyle.button}>
//     <Text style={buttonStyle.buttonText}>
//       </Text>
//   </View>
// </TouchableOpacity>
// }

const buttonStyle = StyleSheet.create({
    button: {
      backgroundColor: "#96EB9D",
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 25,
      position: 'absolute',
      bottom: -10,
      left: -100,
      },
    buttonText: {
      color: "black",
      fontSize: 15,

    }
  }
) 