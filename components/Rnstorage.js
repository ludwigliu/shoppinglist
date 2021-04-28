import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';
import uuidv4 from 'uuidv4';

var storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

const initialItems = [
  {id: uuidv4(), text: 'Milk'},
  {id: uuidv4(), text: 'Broad'},
  {id: uuidv4(), text: 'Egg'},
];

//storage.save({key: 'items', id: '10000', data: initialItems});

global.storage = storage;
