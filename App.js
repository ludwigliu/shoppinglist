import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuidv4 from 'uuidv4';

const App = () => {
  const initialItem = [
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Broad'},
    {id: uuidv4(), text: 'Egg'},
  ];

  const [items, setItems] = useState(initialItem);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
    } else {
      setItems(prevItems => {
        return [...prevItems, {text: text, id: uuidv4()}];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      {items ? (
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      ) : (
        <Text style={styles.emtyText}>Empty list</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emtyText: {
    fontSize: 20,
    color: '#D8D7D7',
    textAlign: 'center',
    paddingTop: 40,
  },
});

export default App;
