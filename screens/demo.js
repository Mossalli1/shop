import React from 'react';
import { Container,Content,List,ListItem,StyleSheet, Text, View ,Image, ImageBackground, ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation';




export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Image
          style={{width: 66, height: 58}}
          source={{uri: 'https://static1.cilory.com/290167-large_default/pepe-jeans-blue-reversible-casual-shirt.jpg'}}
        />
     
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
