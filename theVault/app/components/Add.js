import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, Keyboard, DatePickerIOS, Button, ImagePickerIOS, Image} from 'react-native';
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
			picture: ''
		}

		this.handleBrandChange = this.handleBrandChange.bind(this);
		this.handleModelChange = this.handleModelChange.bind(this);
		this.uploadPhoto = this.uploadPhoto.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit () {
		const {pic, tit} = this.state
		this.props.dispatch({
			type: 'SUBMIT_WATCH',
			picture: this.state.picture,
			title: this.state.brand,
			navigate: () => this.props.navigation.navigate('Collection')
		})
		// this.setState({
		// 	picture: '',
		// 	brand: 'Moshe'
		// })
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

	uploadPhoto(source) {
		this.setState({
			picture: source
		})
	}

	// handlePriceChange(price) {
	// 	this.setState({
	// 		price
	// 	})
	// }

	// handlePhoto(photo) {
	// 	console.log('photo added to local state')
	// 	this.setState({
	// 		photo
	// 	})
	// }

// 	clearData = async () => {
//   try {
//     await AsyncStorage.clear()
//   } catch(e) {
//     // clear error
//   }
// }

	render() {
	    return (
	    	<ScrollView>
		        <View style={styles.inputContainer}>
		          <TextInputTemplate
		          	text="Brand"
		          	propsFunction={this.handleBrandChange}
		          />
		      {/*   <TextInputTemplate
		          // 	text="Model"
		          // 	propsFunction={this.handleModelChange}
		          // />
		          // <TextInputTemplate
		          // 	text="Price Paid"
		          // 	propsFunction={this.handlePriceChange}
		          // />
		          // <PurchaseDate /> */}
		          <TakePhoto 
		          	uploadPhoto={this.uploadPhoto}/>
		          {this.state.picture === '' 
		          	? null
		          	: <Image
                    style={{height: 200, width: 200}}
                    source={{uri: this.state.picture}}
                 	/>}
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