
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { Icon } from 'react-native-elements';

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