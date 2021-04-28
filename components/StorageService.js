import uuidv4 from 'uuidv4';
import Rnstorage from './Rnstorage';

const storage = global.storage;

export async function getAllItems() {
  return await storage
    .load({
      key: 'items',
      id: '10000',
    })
    .then(data => {
      return data;
    }).catch(err => {
      console.log('error: ', err);
      return [];
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
