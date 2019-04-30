import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Keyboard} from 'react-native';

export default class TextInputTemplate extends Component {
	render () {
		return (
			<TextInput 
		          	style={styles.textInput}
		          	placeholder={this.props.text}
		          	onBlur={Keyboard.dismiss}
		          	onChangeText={this.props.propsFunction}
		    />
		)
	}
}

const styles = StyleSheet.create({
  textInput: {
  	height: 40,
  	fontSize: 20,
  	borderColor: 'grey',
  	borderBottomWidth: 1,
  	marginBottom: 5
  }
});






