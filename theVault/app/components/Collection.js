import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image, FlatList, Dimensions, TouchableOpacity} from 'react-native';
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

const numColumns = 3;

let data = [
	{
		picture: 'https://media.istockphoto.com/photos/luxury-watch-picture-id697173746?k=6&m=697173746&s=612x612&w=0&h=iKgd8mqeOZhjDCuDeygQNc4vrWl4GkvG1naI567YJTE=',
		title: 'Rolex - day-date',
		key: 1
	},
	{
		picture: 'http://cdn.shopify.com/s/files/1/0377/2037/products/Womens03.Front_ROSE_GOLD_ADD_grande.jpg?v=1510687973',
		title: 'Omega - peachy',
		key: 2
	},
	{
		picture: 'https://cdn.shopify.com/s/files/1/0627/5517/products/Chrono-S-Blue_Brown_2048x2048.jpg?v=1542911430',
		title: 'Vincero - absolut',
		key: 3
	}

]

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
	        		data={data}
	        		renderItem={({item}) => (
	        			<TouchableOpacity
	        				onPress={() => this.props.navigation.navigate('CollectionItem')}>
		        			<Image
		        				style={styles.watchImage}
		        				source={{uri: item.picture}}
		        			/>
		        			<Text style={styles.watchText}>{item.title}</Text>
		        		</TouchableOpacity>
	        		)} 
	        		numColumns={numColumns}/>
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
  	width: Dimensions.get('window').width / numColumns,
  	height: Dimensions.get('window').width / numColumns
  },
  watchText: {
  	backgroundColor: '#f4511e',
  	color: 'white'
  }
});