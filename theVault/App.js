
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './app/components/Home';
import Add from './app/components/Add';
import Collection from './app/components/Collection';


export default class App extends Component {

  render() {
    return (
      <AppContainer />
    );
  }
}

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Add: Add,
    Collection: Collection
  },
  {
    initialRouteName: 'Add',
  }
);

const AppStack = createStackNavigator(
  {
    App: AppTabNavigator
  },
  {
    defaultNavigationOptions: {
      title: 'The Vault',
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 30
      }  
    }
  } 
)


const AppContainer = createAppContainer(AppStack);


