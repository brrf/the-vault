
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import { Icon } from 'react-native-elements';

export default class Item extends Component {
  render() {
    return (
        <View style={styles.navbar}>
          <Image
                    style={{height: 400, width: 400}}
                    source={{uri: this.props.navigation.getParam('pictureURI')}}
                  />
          <Text>{this.props.navigation.getParam('title')}</Text>
           
        </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});