import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {getAllItems, addItem, removeItem} from './components/StorageService';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuidv4 from 'uuidv4';

const initialItems = [
  {id: uuidv4(), text: 'Milk'},
  {id: uuidv4(), text: 'Broad'},
  {id: uuidv4(), text: 'Egg'},
];

function filterItems(id, items) {
  let filteredItems = items.filter(item => item.id !== id);
  removeItem(filteredItems);
  return filteredItems;
}

function appendItem(text, items) {
  addItem([...items, {id: uuidv4(), text: text}]);

  return [
    ...items,
    {
      id: uuidv4(),
      text: text,
    },
  ];
}

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '',
    };
  }

  UNSAFE_componentWillMount() {
    let data = getAllItems().then(data => {
      this.setState({
        items: data,
      });
    });
    console.log('data ', data);
  }

  addItem = text => {
    this.setState({
      items: appendItem(text, this.state.items),
    });
  };

  deleteItem = id => {
    console.log('item id: ', id);
    this.setState({
      items: filterItems(id, this.state.items),
    });
  };

  render() {
    const renderItem = ({item}) => (
      <ListItem item={item} deleteItem={this.deleteItem} />
    );

    return (
      <View style={styles.container}>
        <Header title="Shopping List" />
        <AddItem addItem={this.addItem} />
        <FlatList
          data={this.state.items}
          //keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    );
  }
}

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

export default ShoppingList;
