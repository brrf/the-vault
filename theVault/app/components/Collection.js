import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image, FlatList} from 'react-native';
import Body from './Body'
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

// let watch = [
// 	{
// 		key: 1,
// 		referenceNumber: 12345,
// 		serialNumber: 12345,
// 		maker: 'maker string',
		
// 		caseSize: 8,
// 		purchaseDate: null,
// 		purchasePrice: 4500,
// 		serviceDate: null,
// 		photos: 'https://facebook.github.io/react/logo-og.png',
// 		sold: {
// 			boolean: true,
// 			date: null,
// 			price: 4500
// 		},
// 		notes: 'free text notes',
// 		currentWatch: false
// 	},
// 	{
// 		key: 2,
// 		referenceNumber: 12345,
// 		serialNumber: 12345,
// 		maker: 'maker string',
		
// 		caseSize: 8,
// 		purchaseDate: null,
// 		purchasePrice: 4500,
// 		serviceDate: null,
// 		photos: 'https://facebook.github.io/react/logo-og.png',
// 		sold: {
// 			boolean: true,
// 			date: null,
// 			price: 4500
// 		},
// 		notes: 'free text notes',
// 		currentWatch: false
// 	}
// ]

class Collection extends Component {
	constructor(props) {
		super(props);

		this.displayData = this.displayData.bind(this);
	}

	  // componentDidMount() {
	  // 		let keys = [];
	  // 		this.getAllKeys()
	  // 	}

	  // getAllKeys = async () => {  
		 //  try {
		 //  	console.log('here')
		 //    keys = await AsyncStorage.getAllKeys();

		 //    for (let i = 0; i < keys.length; i++) {
		 //  	this.getData(keys[i])
		 // 	 }
		 //  } catch(e) {
		 //    // read key error
		 //  }
		      
	  // 	}

	  // getData = async (id) => {
	  //   try {
	  //     let data = await AsyncStorage.getItem(id);
	  //     let parse = JSON.parse(data);
	  //     this.setState({
	  //       watch: [...this.state.watch, parse.photo]
	  //     })
	  //   }

	  //   catch(error) {
	  //     alert(error)
	  //   }
	  // }



	  displayData() {
	  	console.log(this.props.photos);
	  }


	render() {
	    return (
	        <View style={styles.mainContent}>
	        	<FlatList
	        		data={this.props.photos}
	        		renderItem={({item}) => (
	        			<Image
	        				style={styles.watchImage}
	        				source={{uri: item}}
	        			/>
	        		)} />
	        	<Button
	        		title='display state'
	        		onPress={this.displayData} />
	        </View>
	    );
 	}
}

const mapStateToProps = (state) => {
	return {
		photos: state
	}
}

export default connect(mapStateToProps)(Collection)

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