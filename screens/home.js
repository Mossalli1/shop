import React from 'react';
import { StyleSheet, Text, View ,Image, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';

export default class App extends React.Component {
    static navigationOptions = {
        headerStyle :{
            height : 0,
            
        }
      }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.welcome}>
          <ImageBackground style={styles.imgBcg}
            source={require('../images/wc.jpg')}
            style={{width: '100%', height: '100%'}}>
            <Text style={{color : 'blue'}} onPress={() => this.props.navigation.navigate('Login')}>Sign Out</Text>
          </ImageBackground>
        </View>



        <ScrollView >
        <View style={styles.elements}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Details')}>
            <View style={styles.men}>
                <ImageBackground
                    style={{width: 120, height: 120}}
                    source={require('../images/men2.jpg')}
                />
                <Text style={styles.element_text}>Men</Text>
            

                {/* <Avatar
                large
                source={require('./images/men2.jpg')}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                /> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.women}>
                <ImageBackground
                    style={{width: 120, height: 120}}
                    source={require('../images/women2.jpg')}
                />
                <Text style={styles.element_text}>Women</Text>
            </View>
          </TouchableOpacity>
          

          <View style={styles.kid}>
            <ImageBackground
              style={{width: 120, height: 120}}
              source={require('../images/kids.jpg')}
              
            />
            <Text style={styles.element_text}>Kidss</Text>
          </View>

          <View style={styles.sport}>
            <ImageBackground
              style={{width: 120, height: 120}}
              source={require('../images/sports.jpg')}
            />
            <Text style={styles.element_text}>Sports</Text>
          </View>

          <View style={styles.sport}>
            <ImageBackground
              style={{width: 120, height: 120}}
              source={require('../images/decor.jpeg')}
            />
            <Text style={styles.element_text}>Home Decor</Text>
          </View>

          <View style={styles.sport}>
            <ImageBackground
              style={{width: 120, height: 120}}
              source={require('../images/weddings.jpg')}
            />
            <Text style={styles.element_text}>Wedding</Text>
          </View>

          <View style={styles.sport}>
            <ImageBackground
              style={{width: 120, height: 120}}
              source={require('../images/jwellery.jpg')}
            />
            <Text style={styles.element_text}>Jwellery</Text>
          </View>

          <View style={styles.sport}>
            <ImageBackground
              style={{width: 120, height: 120}}
              source={require('../images/men.jpg')}
            />
            <Text style={styles.element_text}>Mens</Text>
          </View>
        </View>
          
        </ScrollView>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  welcome: {
    flexDirection: 'column',
    height : 120,
    width :320,
    // backgroundColor: 'yellow',
    // fontSize: 60,
    // alignItems : 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
    marginBottom: 5
  },

  elements: {
    flexWrap : 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems : 'center',
  },

  men: {
    // flex: 1,
    // backgroundColor: 'red',
    marginBottom: 2,
  },

  women: {
    // flex: 1,
    // backgroundColor: 'blue',
    marginBottom: 2
  },


  kid: {
    // flex: 1,
    // backgroundColor: 'yellow',
    marginBottom: 2
  },

  sport: {
    // flex: 1,
    // backgroundColor: 'green',
    marginBottom: 2
  },

  element_text: {
    fontSize: 20,
    textAlign: "center",
    color: "#FFFFFF",
  }
});
