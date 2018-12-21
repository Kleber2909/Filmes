import React from 'react';
import { StyleSheet, Text, View, ListView, } from 'react-native';
//import {signup} from './Firebase';
import Menu from './Menu'
import Movies from './Controles/Movies'

export default class ListMovies extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  static navigationOptions = {
    title: 'Popular Movies',
  };

  render() {
    return (
      <View style={styles.container}>   
        <View style={styles.boxRow} >
            <Menu/>
        </View>
        <View style={styles.boxRow} >
          <Text style={styles.text} >Filmes populares</Text>
        </View>
        <View style={styles.boxRow} >
        <Movies/>
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
