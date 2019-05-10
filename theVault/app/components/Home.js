import React, {Component} from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';
import Header from './Header';
import Body from './Body';
import {connect} from 'react-redux';

class Home extends Component {

  render() {
    return (
      <View style={styles.mainContent}>
        {this.props.currentWatch
          // ? <Text>{this.props.currentWatch.title}</Text>
          ? <Image
                    style={{height: 400, width: 400}}
                    source={{uri: this.props.currentWatch.picture}}
            />
          : <Text style={styles.currentWatch}>No Watch Selected</Text>}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentWatch: state.selectedWatch
  }
}

export default connect(mapStateToProps)(Home)

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