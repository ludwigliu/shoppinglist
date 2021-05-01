import React from 'react';
import {View, StyleSheet} from 'react-native';

import ShoppingList from './ShoppingList';

const App = () => {
  return (
    <View style={styles.container}>
      <ShoppingList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
});

export default App;
