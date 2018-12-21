import React from 'react';
import Home from './Home';
import ListMovies from './ListMovies';
import Favoritos from './Favoritos';
import DetalhesMovie from './DetalhesMovie';

import { createStackNavigator } from "react-navigation"
export default class App extends React.Component {

  render() {
    return (
     <RootStack/>
    );
  }

}

const RootStack = createStackNavigator({
  Home: Home,
  ListMovies: ListMovies,
  Favoritos: Favoritos,
  DetalhesMovie: DetalhesMovie,
}, {
  initialRouteName: "DetalhesMovie"
});
