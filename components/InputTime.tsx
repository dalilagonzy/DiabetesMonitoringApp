import React from 'react';
import { TextInput } from 'react-native';


const InputTime = () => {
  const [value, onChangeText] = React.useState('00:00');
  return (
    <TextInput style={{height: 80, borderColor: 'gray', borderWidth: 1, alignContent: 'center'}} 
    onChangeText = {text => onChangeText(text)}
    value={value}
    />
  );
}

export default InputTime;

