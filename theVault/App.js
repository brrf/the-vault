
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './app/components/Home';
import Add from './app/components/Add';
import Collection from './app/components/Collection';
import Item from './app/components/Item'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { Icon } from 'react-native-elements'

// handleSubmit () {
//     let id = this.uuidv4() ;
//     let submission = ({
//       photo: this.state.photo
//     });
    
//     AsyncStorage.setItem(id, JSON.stringify(submission));
//     this.props.navigation.navigate('Collection')
//   }

const initialState = [];
  
uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  })
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SUBMIT_WATCH':     
      action.navigate();
      return state.concat({
          picture: action.picture,
          title: action.title,
          key: uuidv4()
      });
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
    CollectionPanel: {
      screen: Collection,
      navigationOptions: ({ navigation }) => {
        return {
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
    },
    CollectionItem: Item
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
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
    }
  }
);

const AddStack = createStackNavigator(
  {
    Add: {
      screen: Add,
      navigationOptions: ({ navigation }) => {
        return {
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
    }
  }
);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Add: AddStack,
    Collection: CollectionStack
  },
  {
    initialRouteName: 'Add',
  }
);

const AppStack = createStackNavigator(
  {
    App: {
      screen: AppTabNavigator,
      navigationOptions: ({ navigation }) => {
        return {
          header: null
        }
      }
    }
  }
)


const AppContainer = createAppContainer(AppStack);


