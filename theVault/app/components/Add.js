import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, DatePickerIOS, Button, ImagePickerIOS} from 'react-native';
import { loadSettings, saveSettings } from '../storage/settingsStorage';
import TextInputTemplate from './TextInputTemplate';

export default class Add extends Component {

	constructor(props) {
		super(props);

		this.state = {
			brand: '',
			model: '',
			price: '',
			purchaseDate: new Date(),
			showDatePicker: true
		}
		this.handleBrandChange = this.handleBrandChange.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.setPurchaseDate = this.setPurchaseDate.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.toggleDatePicker = this.toggleDatePicker.bind(this);
	}

	// async componentDidMount() {
	//   const initialState = await loadSettings();

	//   this.setState(initialState);
	// }

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

	setPurchaseDate(date) {
		this.setState({
			purchaseDate: date
		})
		console.log({date: date})
	}

	handleSubmit() {
		// saveSettings(this.state)
		return
	}

	handleReset() {
		this.setState({
			brand: ''
		})
	}

	toggleDatePicker () {
		this.setState({
			showDatePicker: !this.state.showDatePicker
		})
	}

	render() {

		const datePicker = this.state.showDatePicker
			? <DatePickerIOS 
		          	date={this.state.purchaseDate}
          			onDateChange={this.setPurchaseDate}
          			mode='date'/>
          	: <View /> 
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
		          <View>
			          <TouchableOpacity
			          	onPress={this.toggleDatePicker}
			          	>
			          		<Text style={styles.textField}>{this.state.purchaseDate.toString()}</Text>
			          </TouchableOpacity>
			          {datePicker}
			       </View>

		          <TouchableOpacity
		          	style={styles.saveButton}
		          	onPress={this.handleSubmit}>
		          	<Text
		          		style={styles.saveButtonText}>
		          		Submit
		          	</Text>
		          </TouchableOpacity>
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
  	color: 'grey'
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