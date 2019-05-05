
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './app/components/Home';
import Add from './app/components/Add';
import Collection from './app/components/Collection';
import Item from './app/components/Item'
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
      action.navigate();
      return state.concat(action.photo);
    case 'CLEAR_DATA':
      return [];
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

const CollectionStack = createStackNavigator(
  {
    CollectionPanel: Collection,
    CollectionItem: Item
  },
  {
    headerMode: 'none'
  }
);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Add: Add,
    Collection: CollectionStack
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


