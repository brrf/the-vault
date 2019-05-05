
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Item extends Component {
  render() {
    return (
        <View style={styles.navbar}>
          <Text>This is your watch</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});