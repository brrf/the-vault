
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWatch: null,
      brands: []
    }
   
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      let data = await AsyncStorage.getItem('object');
      let parse = JSON.parse(data);

      this.setState({
        brands: [...this.state.brands, parse.brand]
      })
    }

    catch(error) {
      alert(error)
    }
  }


  render() {
    return (
        <View style={styles.mainContent}>
          <Text style={styles.currentWatch}>
            {this.state.currentWatch ? 'Watch#1' : this.props.text}
          </Text>
          <Text>{this.state.brands[0]}</Text>
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