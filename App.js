import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import home from './screens/home';
import details from './screens/details';
import demo from './screens/demo';
import cart from './screens/cart';
import signUp from './screens/signUp';
import login from './screens/login';


const NavApp = createStackNavigator({
  Login: { screen: login},
  SignUp: { screen: signUp },
  Home: { screen: home },
  Details: { screen: details },
  Cart: { screen:cart },
});



export default class App extends React.Component {
  render() {
    return (
      <NavApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  }

});
