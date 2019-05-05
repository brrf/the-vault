
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './app/components/Home';
import Add from './app/components/Add';
import Collection from './app/components/Collection';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// handleSubmit () {
//     let id = this.uuidv4() ;
//     let submission = ({
//       photo: this.state.photo
//     });
    
//     AsyncStorage.setItem(id, JSON.stringify(submission));
//     this.props.navigation.navigate('Collection')
//   }

const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SUBMIT_WATCH': 
      console.log('submitted photo to reducer')
      return state.concat(action.photo);
    default: 
      return state;
  }
}

const store = createStore(reducer);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
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


