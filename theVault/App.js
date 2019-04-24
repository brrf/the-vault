
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Header from './app/components/Header';
import Body from './app/components/Body';
import Footer from './app/components/Footer';

export default class App extends Component {
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
      <View style={styles.container}>
        <Header />
        <Body />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  navbar: {
    flex: 1,
    backgroundColor: 'crimson',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContent: {
    flex: 4,
    justifyContent: 'center'
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
  },
  button: {
    borderColor: 'crimson',
    borderWidth: 2
  },
  currentWatch: {
    fontSize: 24,
    textAlign: 'center'
  }
});
