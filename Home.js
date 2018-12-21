import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
import {signup} from './Firebase';

export default class Home extends React.Component {
  
  propsApp = "";

  constructor(props) {
    super(props);
    propsApp = props;
    this.state = {email: '', senha: '' };
  }
  
  static navigationOptions = {
    title: 'Login',
  };
  
  render() {
    return (
      
      <View style={styles.container}>   
        <View style={styles.box} >
          <Image source={require('./img/movies.gif')} style={styles.logoStyle} />
          <View style={styles.separadorImagem} />
          <TextInput placeholder = "Informe seu e-mail" keyboardType = "email-address" returnKeyType = "next" style={styles.textInput} onChangeText={(email) => this.setState({email})}/>
          <View style={styles.separador} />
          <TextInput placeholder = "Informe uma senha" returnKeyType = "go" style={styles.textInputSenha} secureTextEntry={true}  onChangeText={(senha) => this.setState({senha})}/>
          <View style={styles.separador} />
          <TouchableOpacity  style={styles.botao} onPress={this.onCriarUsuario} >
            <Text style={styles.text} >Logar</Text>
          </TouchableOpacity>
        </View>
      </View>      
    );
  }

  onCriarUsuario = () => {
    const { email, senha } = this.state
    console.log('Email: ' + email + ' Senha ' + senha);
    signup(email.toString().toLowerCase(), senha, propsApp); 
    //signup("emaial@emao.com", "senha1111111111", propsApp); 
  };
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flexDirection: 'column',
    backgroundColor: 'steelblue',
    alignItems: 'center',
    
    flex: 1, 
  },

  separadorImagem: {borderWidth: 25, borderColor: 'steelblue'},

  separador: {borderWidth: 10, borderColor: 'steelblue'},

  textInput:{fontSize: 20, alignItems: 'stretch', height: 30, width: 280, backgroundColor: '#ffffff' },

  textInputSenha:{fontSize: 20, alignItems: 'stretch', height: 30, width: 280, backgroundColor: '#ffffff'  },

  text: {fontSize: 20, height: 30, alignItems: 'center', justifyContent: 'space-around'},
  
  logoStyle: {width: 280, height: 200},

  boxRow: { flexDirection: 'column',  },
  
  botao: { justifyContent: 'space-around',   height: 40, alignItems: 'center',  backgroundColor: '#007fff', borderColor: '#007fff'},

  

});
