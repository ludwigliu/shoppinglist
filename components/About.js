import React from 'react';
import {Provider, Portal, Button, Dialog, Paragraph} from 'react-native-paper';

const About = ({visible, setVisible}) => {
  return (
    <Provider>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Shopping List</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Created by ludwig </Paragraph>
            <Paragraph>Powered by React Native</Paragraph>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default About;
