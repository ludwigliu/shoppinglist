import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

function ItemIcon({onPress}) {
  const [completed, setCompleted] = useState(false);

  const onComplete = () => {
    setCompleted(!completed);
    onPress();
  };

  return completed ? (
    <Button
      style={styles.button}
      compact={true}
      icon="checkbox-blank-circle"
      onPress={() => onComplete()}></Button>
  ) : (
    <Button
      style={styles.button}
      compact={true}
      icon="checkbox-blank-circle-outline"
      onPress={() => onComplete()}></Button>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
});

export default ItemIcon;
