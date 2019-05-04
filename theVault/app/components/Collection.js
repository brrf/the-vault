import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import Body from './Body'

let watch = {
		id: 12345,
		referenceNumber: 12345,
		serialNumber: 12345,
		maker: 'maker string',
		
		caseSize: 8,
		purchaseDate: null,
		purchasePrice: 4500,
		serviceDate: null,
		photos: 'https://facebook.github.io/react/logo-og.png',
		sold: {
			boolean: true,
			date: null,
			price: 4500
		},
		notes: 'free text notes',
		currentWatch: false
	}

export default class Collection extends Component {

	

	render() {
	    return (
	        <View style={styles.mainContent}>
	          <Image
	          	source={{uri: watch.photos}}
	          	style={styles.watchImage} />
	        </View>
	    );
 	}
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 4,
    justifyContent: 'center'
  },
  watchImage: {
  	width: 200,
  	height: 200
  }
});