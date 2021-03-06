import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Image} from 'react-native';
//import {signup} from './Firebase';
import Menu from './Menu'

export default class Favoritos extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  static navigationOptions = {
    title: 'Popular Movies - Favoritos',
  };
  
  render() {
    return (
      <View style={styles.container}>   
        
        <View style={styles.boxRow} >
            <Menu/>
        </View>
        <View style={styles.boxRow} >
          <Text style={styles.text} >Filmes Favoritos</Text>
        </View>
        <View style={styles.boxRow} >
          <Image source={require('./img/movies.gif')} style={styles.logoStyle} />         
        </View>
      </View>      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    
    
  },
  
  text: { fontSize: 22, height: 30, alignItems: 'center', justifyContent: 'space-around', },

  logoStyle: {width: 280, height: 200},

  boxRow: { flexDirection: 'row',  }, 

});
