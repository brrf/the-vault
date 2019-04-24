
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Header extends Component {
  render() {
    return (
        <View style={styles.navbar}>
          <Text>This is the watch app</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    backgroundColor: 'crimson',
    justifyContent: 'center',
    alignItems: 'center'
  }
});