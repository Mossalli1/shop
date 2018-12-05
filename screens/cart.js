import React from 'react';
import { Container,Content,List,ListItem,StyleSheet, Text, View ,Image, ImageBackground, ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation';




export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>This is cart Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
  },

  text_element : {
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF",
  }

});
