import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Header = ({title, showAbout}) => {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.menu}>
        <Button icon="menu" onPress={showAbout}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    paddingBottom: 0,
    backgroundColor: 'aliceblue',
    flexDirection: 'row',
    flex: 1
  },
  title: {
    height: 40,
    flex: 9,
  },
  menu: {
    flex: 1,
    height: 40,
    width: 40,
  },
  text: {
    color: 'darkslateblue',
    textAlign: 'center',
    fontSize: 24,
  },
});

export default Header;
