// import * as React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import HomeScreen from './screens/Home'
import AboutScreen from './screens/About'


const appNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      title: 'Home',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions:{
      title: 'About',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
    }
  }
})

export default createAppContainer(appNavigation)