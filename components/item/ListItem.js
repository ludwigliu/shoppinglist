import React from 'react';
import {View, StyleSheet } from 'react-native';
import {List} from 'react-native-paper';

import ItemIcon from './ItemIcon';

const ListItem = ({item, onComplete, onSelect}) => {

  return (
    <View>
      <List.Item
        style={styles.listItem}
        titleStyle={styles.titleStyle}
        delayLongPress={styles.descriptionStyle}
        title={item.text}
        description={item.description}
        onPress={() => onSelect(item)}
        left={() => <ItemIcon onPress={() => onComplete(item.id)} />}
      />
    </View>
  );
};

// icons checkbox-blank-circle-outline

const styles = StyleSheet.create({
  listItem: {
    padding: 0,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 20,
  },
  descriptionStyle: {
    fontSize: 2,
  },
});

export default ListItem;
