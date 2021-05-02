import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';

export default function FloatingButton(props) {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={props.onPress}
        style={styles.button}>
        <Image
          source={{
            uri:
              'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png',
          }}
          style={styles.buttonImg}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  buttonImg: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
});
