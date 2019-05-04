
import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class TakePhoto extends Component {
	constructor(props) {
		super(props);

		this.choosePhoto = this.choosePhoto.bind(this);
	}

  choosePhoto() {
    const options = {}
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
	    console.log('User cancelled image picker');
	  } else if (response.error) {
	    console.log('ImagePicker Error: ', response.error);
	  } else if (response.customButton) {
	    console.log('User tapped custom button: ', response.customButton);
	  } else {
	    const source = response.uri;
	    this.props.uploadPhoto(source)
	    }

      
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