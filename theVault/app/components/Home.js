import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Header from './Header';
import Body from './Body';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWatch: null
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Body text='No watch selected'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
});