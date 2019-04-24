
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Footer extends Component {

  render() {
    return (
        <View style={styles.buttons}>
          <Button title='Button 1' style={styles.button} />
          <Button title='Button 2' style={styles.button}/>
          <Button title='Button 3' style={styles.button}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
  },
  button: {
    borderColor: 'crimson',
    borderWidth: 2
  },
});