import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Body from './Body'

export default class Add extends Component {
	render() {
	    return (
	        <View style={styles.mainContent}>
	          <Text style={styles.currentWatch}>
	            Change Settings
	          </Text>
	        </View>
	    );
 	}
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 4,
    justifyContent: 'center'
  },
  currentWatch: {
    fontSize: 24,
    textAlign: 'center'
  }
});