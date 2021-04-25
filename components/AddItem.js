import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Please Input"
        style={styles.input}
        onChangeText={text => setText(text)}
        onSubmitEditing={() => {
            addItem(text);
            //setText('');
        }}
        value={text} 
      />

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#D8D7D7'
  },
  btn: {
    backgroundColor: '#F6F3F2',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
