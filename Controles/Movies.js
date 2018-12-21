import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ListView, ScrollView, Alert, } from 'react-native';
import { db } from '../Firebase';

var movieArray = [];

export default class Movies extends React.Component {
  
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.guid != r2.guid});
    this.state = {listaFavoritos: false,
      dataSource: dataSource.cloneWithRows(movieArray),
    }
  }
  
  componentDidMount() {
    console.log("componentDidMount");
    if(this.props.listaFavoritos)
      this.getDataFirebase();
    else
      this.getData(function(json){
      movieArray = json.results;
      //console.log(movieArray);
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(movieArray),
      })
      }.bind(this));   
  }

  getData(callback) {
    console.log("callback");
    var url = "https://api.themoviedb.org/3/discover/movie?api_key=d64533681aa6c5d4718df88118a3412e&language=pt-BRS&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    fetch(url)
     .then(response => response.json())
     .then(json => callback(json))
     .catch(error => console.log(error));
   }

   getDataFirebase() {
     try{
      //let itemsRef = db.ref('/favoritos').child(uID);
      let dbRef = db.ref('/favoritos').child('qyzCgsfnH3dUc9KYiFRHl1gaLX33');
      dbRef.on('value', (snapshot) => {
        try{
          console.log("filmes: ", snapshot.val());
          this.setState({dataSource:this.state.dataSource.cloneWithRows(snapshot.val()),})
        }
        catch(error){
          console.log("error: ", error);
          this.setState({dataSource:this.state.dataSource.cloneWithRows(""),})
        }
      });
    }
    catch(error){
      console.log("error: ", error);
    }
  }

   renderRow(rowData) {
    //console.log("rowData ", rowData);
    return (
        <TouchableOpacity style={{height:30} } onPress={ this.onPressList.bind(this, rowData)}  >
          <View>
            <Text style={styles.container} numberOfLines={1}>{rowData.title}</Text>
          </View>
        </TouchableOpacity>
);
}

onPressList = (rowData) =>{
  console.log("clik " + rowData.id)
  propsAPP.navigation.navigate('DetalhesMovie', {id: rowData.id});
}


render() {
  console.log("Render ");
    return (
      <View style={styles.container}>  
        <View style={styles.boxRow} >
          <ListView 
                dataSource={this.state.dataSource} 
                renderRow={this.renderRow.bind(this)} enableEmptySections={true}
          />
        </View>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flexDirection: 'column',
  },
  
  text: { fontSize: 22, height: 30,  justifyContent: 'space-around', },

  logoStyle: {width: 280, height: 200},

  boxRow: { flexDirection: 'row',  }, 

});
