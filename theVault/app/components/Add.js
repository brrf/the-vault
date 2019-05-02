import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, DatePickerIOS, Button, ImagePickerIOS} from 'react-native';
import { loadSettings, saveSettings } from '../storage/settingsStorage';
import TextInputTemplate from './TextInputTemplate';
import PurchaseDate from './PurchaseDate';
import TakePhoto from './TakePhoto';
import AsyncStorage from '@react-native-community/async-storage';

export default class Add extends Component {

	constructor(props) {
		super(props);

		this.state = {
			brand: '',
			model: '',
			price: ''
		}

		this.handleBrandChange = this.handleBrandChange.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleBrandChange(brand) {
		this.setState({
			brand
		})
	}

	handleModelChange(model) {
		this.setState({
			model
		})
	}

	handlePriceChange(price) {
		this.setState({
			price
		})
	}

	handleSubmit () {
		let submission = ({
			name: 'Moshe',
			occupation: 'radiologist'
		});
		AsyncStorage.setItem('object', JSON.stringify(submission));

		alert(JSON.stringify(submission));
	}

	getData = async () => {
		try {
			let data = await AsyncStorage.getItem('object');
			let parse = JSON.parse(data);

			alert(parse.name)
		}

		catch(error) {
			alert(error)
		}
	}

	render() {
	    return (
	    	<ScrollView>
		        <View style={styles.inputContainer}>
		          <TextInputTemplate
		          	text="Brand"
		          	propsFunction={this.handleBrandChange}
		          />
		          <TextInputTemplate
		          	text="Model"
		          	propsFunction={this.handleModelChange}
		          />
		          <TextInputTemplate
		          	text="Price Paid"
		          	propsFunction={this.handlePriceChange}
		          />
		          <PurchaseDate />
		          <TakePhoto />
		          <TouchableOpacity
		          	style={styles.saveButton}
		          	onPress={this.handleSubmit}>
		          	<Text
		          		style={styles.saveButtonText}>
		          		Submit
		          	</Text>
		          </TouchableOpacity>
		          <Button
		          	title='Click to alert'
		          	onPress={this.getData} />
		        </View>		        
	        </ScrollView>
	    );
 	}
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    margin: 10
  },
  currentWatch: {
    fontSize: 24,
    textAlign: 'center'
  },
  textField: {
  	height: 40,
  	fontSize: 20,
  	borderColor: 'grey',
  	borderBottomWidth: 1,
  	marginBottom: 5,
  	color: '#D3D3D3'
  },
  saveButton: {
  	height: 40,
  	backgroundColor: '#f4511e',
  	marginTop: 10,
  	display: 'flex',
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  saveButtonText: {
  	color: 'white',
  	fontSize: 15
  }
});