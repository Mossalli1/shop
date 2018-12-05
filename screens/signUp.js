import React from 'react';
import { Container,Content,List,ListItem,StyleSheet, Text, View ,Image, ImageBackground, ScrollView, KeyboardAvoidingView} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'





export default class App extends React.Component {

  static navigationOptions = {
    headerStyle :{
        height : 0,
        
    }
  }

    state = { 
         UserName:'', Email:'', Password:'',
    }

    upDateUserName = (text)=> this.setState({UserName : text})
    upDateEmail = (text)=> this.setState({Email : text})
    upDatePassword = (text)=> this.setState({Password : text})

  render() {
    return (
      <KeyboardAvoidingView behavior="position" enabled> 
      <View>
        <FormLabel>User Name</FormLabel>
        <FormInput placeholder={'Enter User Name'} onChangeText={this.upDateUserName}/>

        <FormLabel>Cell Phone</FormLabel>
        <FormInput keyboardType={'number-pad'} placeholder={'Enter Cell Phone Number'} onChangeText={this.upDateUserName}/>
        
        <FormLabel>Email</FormLabel>
        <FormInput placeholder={'Enter Email'} onChangeText={this.upDateEmail}/>
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry={true} placeholder={'Enter Password'} onChangeText={this.upDatePassword}/>
        <Button onPress={()=> this.props.navigation.navigate('Login')}
            title='Sign Up'
        />

        <Text style={styles.text}>
          If You Alredy SignUp Please  <Text style={{color : 'blue'}} onPress = {()=> this.props.navigation.navigate('Login')}>Login Here
          </Text>
        </Text>
       
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#455A64',
  },

});


