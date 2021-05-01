import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'aliceblue',
    padding: 10,
  },
  text: {
    color: 'darkslateblue',
    textAlign: 'center',
    fontSize: 24,
  },
});

export default Header;
