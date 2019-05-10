
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import {connect} from 'react-redux';

class Item extends Component {
  constructor(props) {
    super(props);

    this.setSelectedWatch = this.setSelectedWatch.bind(this);
  }

  setSelectedWatch() {
    this.props.dispatch({
      type: 'SELECT_WATCH',
      watch: {
        picture: this.props.navigation.getParam('pictureURI'),
        title: this.props.navigation.getParam('title')
      }
    })
  }

  render() {
    return (
        <View style={styles.navbar}>
          <Image
                    style={{height: 400, width: 400}}
                    source={{uri: this.props.navigation.getParam('pictureURI')}}
          />
          <Text>{this.props.navigation.getParam('title')}</Text>
          <Button
            onPress={this.setSelectedWatch}
            title='Make Current Watch'
          />
        </View>
    );
  }
}

export default connect(null, null)(Item)

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});