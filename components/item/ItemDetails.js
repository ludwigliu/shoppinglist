import React, {useState} from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {Provider, Button, Paragraph, Dialog, Portal} from 'react-native-paper';

export default function ItemDetails({item, modalVisible, onDismiss, onSave}) {
  const [text, setText] = useState(item.text);
  const [description, setDescription] = useState(item.description);

  return (
    <Provider>
      <Portal>
        <Dialog visible={modalVisible} onDismiss={onDismiss}>
          <Dialog.Title>Details</Dialog.Title>
          <Dialog.Content>
            <View style={styles.inputView}>
              <Text style={styles.textLabel}>Name</Text>
              <TextInput
                autoFocus={true}
                onChangeText={text => setText(text)}
                defaultValue={item.text}
              />
              <Text style={styles.textLabel}>Description</Text>
              <TextInput
                multiline={true}
                onChangeText={text => setDescription(text)}
                defaultValue={item.description}
              />
            </View>
          </Dialog.Content>

          <Dialog.Actions>
            <Button style={styles.btn} onPress={onDismiss}>
              CANCEL
            </Button>
            <Button
              style={styles.btn}
              icon="content-save"
              onPress={() =>
                onSave({
                  text: text,
                  description: description,
                })
              }>
              OK
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  inputView: {},
  textLabel: {
    fontWeight: 'bold',
  },
  btn: {},
});
