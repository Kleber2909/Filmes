import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
//import {signup} from './Firebase';

export default class Menu extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return (
      <View style={styles.container}>    
            <View style={styles.boxRow}>
                <TouchableOpacity  style={styles.botao} onPress={() => this.onFilmes()}>
                    <Image source={require('./img/camera.png')} style={styles.logoStyle} />
                    <Text style={styles.text} >Filmes</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.botao} onPress={this.onFavoritos} >
                    <Image source={require('./img/favoritos.png')} style={styles.logoStyle} />
                    <Text style={styles.text} >Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.botao} onPress={this.onLogin} >
                    <Image source={require('./img/login.png')} style={styles.logoStyle} />
                    <Text style={styles.text} >Login</Text>
                </TouchableOpacity>
            </View>
      </View>      
    );
  }

  onFilmes(){
    console.log('onFilmes: ');
    propsAPP.navigation.navigate('ListMovies');
  }

  onFavoritos = () => {
    console.log('onFavoritos: ');
    propsAPP.navigation.navigate('Favoritos');
  };

  onLogin = () => {
    console.log('onLogin: ');
    propsAPP.navigation.navigate('Home');
  };
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1, 
  },

  text: { fontSize: 13, height: 30, alignItems: 'center', justifyContent: 'space-around', color: '#ffffff',},
  
  logoStyle: {width: 40, height: 40},

  boxRow: { backgroundColor: 'steelblue',  height: 60, flexDirection: 'row',  justifyContent: 'center',},
  
  botao: {flex: 1, alignItems: 'center', },

});
