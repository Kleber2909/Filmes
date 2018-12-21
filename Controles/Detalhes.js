import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {GravarMovie} from '../Firebase';

export default class DetalhesMovie extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {titulo: "", 
                  poster: {uri: ''}, 
                  detalhes: ""
                }
  }
  
  componentDidMount() {
    console.log("componentDidMount");
    this.getTheData(function(json){
     productArray = json;
      console.log(productArray);
      this.setState({titulo: productArray.original_title,
                     poster: {uri: 'https://image.tmdb.org/t/p/w500/' + productArray.poster_path},
                     detalhes: productArray.overview})
    }.bind(this));   
  }

  getTheData(callback) {
    console.log("callback");
    console.log("this.props.movie " + this.props.movie);
    var url = "https://api.themoviedb.org/3/movie/" + this.props.movie + "?api_key=d64533681aa6c5d4718df88118a3412e&language=pt-BR";
    fetch(url)
     .then(response => response.json())
     .then(json => callback(json))
     .catch(error => console.log(error));
   }

  render() {
    console.log('movie: ' + this.props.movie);
    return (
      <View style={styles.container}>   
          <View style={styles.boxRow} >
            <Text>
              <Text style={styles.text} >{this.state.titulo}</Text>
            </Text>
          </View>
          <View style={styles.boxRow} >
            <Image source= {this.state.poster} style={styles.logoStyle} />         
          </View>
          <View style={styles.boxRow} >
            <Text>
              <Text style={styles.textDetales} >{this.state.detalhes}</Text>
            </Text>
          </View>
          <View style={styles.boxRow} >
            <TouchableOpacity onPress={ this.onGravarMovie} >
              <Image source={require('../img/favorito.png') } style={styles.favorito} />       
            </TouchableOpacity>
          </View>
      </View>      
    );
  }

  onGravarMovie = () =>{
    console.log("onGravarMovie");
    GravarMovie(productArray);
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    
    
  },
  
  text: { fontSize: 22, height: 30, alignItems: 'center', justifyContent: 'space-around', },

  textDetales: { fontSize: 16, height: 30, alignItems: 'center', justifyContent: 'space-around', },

  logoStyle: {width: 280, height: 200},

  favorito: {width: 40, height: 40},

  boxRow: { flexDirection: 'row',  }, 

});
