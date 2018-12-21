import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Menu from './Menu'
import Movies from './Controles/Movies'

export default class Favoritos extends React.Component {
  
  constructor(props) {
    super(props);
    global.propsAPP = props;
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
        <ScrollView scrollsToTop={false}>
          <View style={styles.boxRow} >
            <Movies listaFavoritos={true}/>
          </View>
        </ScrollView>
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
