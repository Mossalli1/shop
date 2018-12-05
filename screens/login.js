import React from 'react';
import { Container,Content,List,ListItem,StyleSheet, Text, View ,Image, ImageBackground, ScrollView, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'




// const result1 = navigation.getParam('this.state.UserName');
// const result2 = navigation.getParam('this.state.Password');

export default class App extends React.Component {
  static navigationOptions = {
    headerStyle :{
        height : 0,
    }
  }

  state = {
    UserName: "", Password: ""
  }

  upDateUserName = (text)=> this.setState({UserName : text})
  upDatePassword = (text)=> this.setState({Password : text})
  
  login(){

    // if (this.state.UserName == this.props.navigation.getParam('this.state.UserName') && this.state.Password ==this.props.navigation.getParam('this.state.Password')){
    //   this.props.navigation.navigate('Home')
    // }else{
    //   ToastAndroid.show('User Name or Password Does Not Match!', ToastAndroid.SHORT);
    // }

    if (this.state.UserName =="Mamun" && this.state.Password =="1234"){
      this.props.navigation.navigate('Home')
    }else{
      ToastAndroid.show('User Name or Password Does Not Match!', ToastAndroid.SHORT);
    }
  }

  render() {
    
    
    return (
      <KeyboardAvoidingView>
      <View style={{alignConten: 'center'}}>
        <FormLabel>User Name</FormLabel>
        <FormInput placeholder={'Enter Your User Name'} onChangeText={this.upDateUserName} />
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry={true} placeholder={'Enter Password'} onChangeText={this.upDatePassword}/>
        <Button onPress={()=> this.login()}
            title='Login'
        />

        <Text style={styles.text}>
          If You Are a New User  <Text style={{color : 'blue'}} onPress = {()=> this.props.navigation.navigate('SignUp')}>Signup Here
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
    backgroundColor: '#455A64',
  },
  
  text:{
    justifyContent: 'center',
    alignItems : 'center'
  }

});
