import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {getAllItems, addItem, removeItem} from './components/StorageService';

import Header from './components/Header';
import ListItem from './components/item/ListItem';
import FloatingButton from './components/FloatingButton';
import ItemDetails from './components/item/ItemDetails';
import About from './components/About';
import uuidv4 from 'uuidv4';

function filterItems(id, items) {
  let filteredItems = items.filter(item => item.id !== id);
  removeItem(filteredItems);
  return filteredItems;
}

const itemTemplate = {
  text: '',
  id: '',
  description: '',
};

function appendItem(item, items) {
  addItem({...items, item: item});
  return [...items, item];
}

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      modalVisible: false,
      selectedItem: '',
      aboutVisible: false,
    };
  }

  componentDidMount() {
    let data = getAllItems().then(data => {
      this.setState({
        items: data,
      });
    });
    console.log('data ', data);
  }

  // click on floating button to add item
  onPressFloatingButton = () => {
    this.setState({
      modalVisible: true,
      selectedItem: itemTemplate,
    });
  };

  handleCompleteItem = id => {
    console.log('complete item: ', id);
    this.setState({
      items: filterItems(id, this.state.items),
    });
  };

  handleSaveItem = item => {
    item.id = uuidv4();
    console.log('current before saved: ', this.state.items);
    console.log('save item ', item);
    this.setState({
      items: appendItem(item, this.state.items),
    });
  };

  handleSelectItem = item => {
    console.log('selected item: ', item);
    this.setState({
      modalVisible: true,
      selectedItem: item,
    });
  };

  handleDismiss = () => {
    console.log('dismiss modal');
    this.setState({
      modalVisible: false,
    });
  };

  showAbout = visible => {
    this.setState({
      aboutVisible: visible,
    });
  };

  render() {
    const renderItem = ({item}) => (
      <ListItem
        item={item}
        onComplete={this.handleCompleteItem}
        onSelect={this.handleSelectItem}
      />
    );

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header title="Shopping List" showAbout={this.showAbout} />
        </View>

        <FlatList
          style={styles.list}
          data={this.state.items}
          renderItem={renderItem}
        />
        {this.state.modalVisible && (
          <ItemDetails
            item={this.state.selectedItem}
            modalVisible={this.state.modalVisible}
            onDismiss={this.handleDismiss}
            onSave={this.handleSaveItem}
          />
        )}
        {this.state.aboutVisible && (
          <About
            visible={this.state.aboutVisible}
            setVisible={this.showAbout}
          />
        )}
        <FloatingButton onPress={this.onPressFloatingButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    height: 40,
  },
  list: {
    paddingLeft: 4,
    paddingRight: 4,
  },
});

export default ShoppingList;
