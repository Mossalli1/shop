import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import home from './screens/home';
import details from './screens/details';


const NavApp = createStackNavigator({
  Home: { screen: home },
  Details: { screen: details },
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
