import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native';

export function Button(){
  


return(
  <TouchableOpacity onPress={_onPressButton}>
  <View style={buttonStyle.button}>
    <Text style={buttonStyle.buttonText}>
      </Text>
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
      backgroundColor: "green",
      paddingVertical: 10,
      paddingHorizontal: 10,
      },
    buttonText: {
      color: "black",
      fontSize: 20,
    }
  }
) 