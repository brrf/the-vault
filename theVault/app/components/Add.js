import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, DatePickerIOS, Button, ImagePickerIOS} from 'react-native';
import TextInputTemplate from './TextInputTemplate';
import PurchaseDate from './PurchaseDate';
import TakePhoto from './TakePhoto';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

class Add extends Component {

	constructor(props) {
		super(props);

		this.state = {
			brand: '',
			model: '',
			price: '',
			photo: ''
		}

		this.handleBrandChange = this.handleBrandChange.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.handlePhoto = this.handlePhoto.bind(this);
		this.uploadPhoto = this.uploadPhoto.bind(this);
	}

	uploadPhoto () {
		this.props.dispatch({
			type: 'SUBMIT_WATCH',
			photo: this.state.photo
		})
	}

	uuidv4() {
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	    return v.toString(16);
	  });
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

	handlePhoto(photo) {
		console.log('photo added to local state')
		this.setState({
			photo
		})
	}

	handleSubmit () {
		return {
		handleSubmit: () => {
			console.log('dispatch called');
			dispatch({
			type: 'SUBMIT_WATCH',
			photo
			})
		}		
	}
	}

	clearData = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
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
		          <TakePhoto 
		          	uploadPhoto={this.handlePhoto}/>
		          <TouchableOpacity
		          	style={styles.saveButton}
		          	onPress={this.uploadPhoto}>
		          	<Text
		          		style={styles.saveButtonText}>
		          		Submit
		          	</Text>
		          </TouchableOpacity>
		          <Button
		          	title = 'Clear all data'
		          	onPress={this.clearData} />
		        </View>		        
	        </ScrollView>
	    );
 	}
}

export default connect(null, null)(Add)

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