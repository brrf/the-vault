import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, DatePickerIOS} from 'react-native';

export default class PurchaseDate extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showDatePicker: false,
			purchaseDate: 'Purchase Date'
		}
		this.toggleDatePicker = this.toggleDatePicker.bind(this);
		this.setPurchaseDate = this.setPurchaseDate.bind(this);
		this.formatDate = this.formatDate.bind(this);
	}

	toggleDatePicker () {
		this.setState({
			showDatePicker: !this.state.showDatePicker
		})
	}

	setPurchaseDate(date) {
		this.setState({
			purchaseDate: date
		})
	}

	formatDate(date) {

		let month = date.getMonth();

		switch (month) {
			case 0:
				month = 'January';
				break;
			case 1:
				month = 'February';
				break;
			case 2:
				month = 'March';
				break;
			case 3:
				month = 'April';
				break;
			case 4:
				month = 'May';
				break;
			case 5:
				month = 'June';
				break;
			case 6:
				month = 'July';
				break;
			case 7:
				month = 'August';
				break;
			case 8:
				month = 'September';
				break;
			case 9:
				month = 'October';
				break;
			case 10:
				month = 'November';
				break;
			case 10:
				month = 'December';
				break;
			default:
				return month;

		}

		return `${month} ${date.getDate()}, ${date.getFullYear()}`
	}

	render () {
		const datePicker = this.state.showDatePicker
			? <DatePickerIOS 
		          	date={this.state.purchaseDate === 'Purchase Date'
		          		? new Date()
		          		: this.state.purchaseDate
		          	}
          			onDateChange={this.setPurchaseDate}
          			mode='date'/>
          	: null

		return (
			<View>
	          <TouchableOpacity
	          	onPress={this.toggleDatePicker}
	          >
	          		<Text style={this.state.purchaseDate === 'Purchase Date' ? styles.textInputInactive : styles.textInputActive}>{this.state.purchaseDate === 'Purchase Date'
	          		 ? 'Purchase Date'
	          		 : this.formatDate(this.state.purchaseDate)}
	          		</Text>
	          </TouchableOpacity>
	          {datePicker}
	       </View>
		)
	}
}

const styles = StyleSheet.create({
  textInputInactive: {
  	height: 40,
  	fontSize: 20,
  	marginBottom: 5,
  	color: '#D3D3D3',
  	borderBottomWidth: 1,
  	borderColor: 'grey',
  },
  textInputActive: {
  	height: 40,
  	fontSize: 20,
  	marginBottom: 5,
  	color: 'black',
  	borderBottomWidth: 1,
  	borderColor: 'grey'
  }
});
