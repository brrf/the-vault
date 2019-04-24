
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWatch: null
    }
    //this.setCurrentWatch = this.setCurrentWatch.bind(this);
  }

  // setDate(newDate) {
  //   this.setState({chosenDate: newDate});
  // }

  render() {
    return (
        <View style={styles.mainContent}>
          <Text style={styles.currentWatch}>
            {this.state.currentWatch ? 'Watch#1' : 'No watch selected'}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 4,
    justifyContent: 'center'
  },
  currentWatch: {
    fontSize: 24,
    textAlign: 'center'
  }
});