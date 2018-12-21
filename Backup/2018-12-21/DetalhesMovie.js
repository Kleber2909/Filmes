import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Menu from './Menu'
import Detalhes from './Controles/Detalhes'

export default class DetalhesMovie extends React.Component {
  
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const id = navigation.getParam('id', '0');
    this.state = {movie: id}
  }

  static navigationOptions = {
    title: 'Popular Movies - Detalhes',
  };

  render() {
    return (
      <View style={styles.container}>   
        <ScrollView scrollsToTop={false}>
        <View style={styles.boxRow} >
            <Menu/>
        </View>
        
          <View style={styles.boxRow} >
            <Detalhes movie={this.state.movie}/>
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
  
  boxRow: { flexDirection: 'row',  }, 

});
