import AsyncStorage from '@react-native-async-storage/async-storage';
import Rnstorage from './Rnstorage';
import uuidv4 from 'uuidv4';

const storage = global.storage;

const initialItems = [
  {id: uuidv4(), text: 'Sample', description: 'a sample item'},
];

export async function getAllItems() {
  return await storage
    .load({
      key: 'items',
      id: '10000',
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      console.log('error: ', err);
      return initialItems;
    });
}

export function addItem(items) {
  cleanItems();
  storage.save({key: 'items', id: '10000', data: items});
}

export function removeItem(items) {
  cleanItems();
  storage.save({key: 'items', id: '10000', data: items});
}

export function cleanItems() {
  storage.remove({key: 'items'});
}
