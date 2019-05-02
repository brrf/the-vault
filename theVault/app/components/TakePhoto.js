
import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class TakePhoto extends Component {

  choosePhoto = () => {
    console.log('here')
    const options = {}
    ImagePicker.showImagePicker(options, response => {
      console.log("response", response)
    })
  }

  render() {
    return (
      <View style={styles.textInput}>
        <TouchableOpacity
    	  onPress={this.choosePhoto}>
    	    <Text
    	      style={styles.textInput}>
    	      Take a Photo
    	    </Text>
     	</TouchableOpacity>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
  	height: 40,
  	fontSize: 20,
  	marginBottom: 5,
  	color: '#D3D3D3',
  	borderBottomWidth: 1,
  	borderColor: 'grey'
  }
});