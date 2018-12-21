import React from 'react';
import { Alert, View, Text} from 'react-native';

import * as firebase from "firebase";

let app = firebase.initializeApp({
        apiKey: "AIzaSyBcIEJe9TIgMEHk_PprCF4xSuzByyAjqGk",
        authDomain: "filmes-dc1d7.firebaseapp.com",
        databaseURL: "https://filmes-dc1d7.firebaseio.com",
        projectId: "filmes-dc1d7",
        storageBucket: "",
        messagingSenderId: "337131966179"
    });

    export const db = app.database();

    export async function signup(email, pass, props) {

        try {
            await firebase.auth()
                .createUserWithEmailAndPassword(email, pass);
                //console.log("Account created");
                login(email, pass, props);
            // Navigate to the Home page, the user is auto logged in    
        } catch (error) {
            if(error.toString() === "Error: The email address is already in use by another account.")
                login(email, pass, props);
            else
            {
                console.log(error.toString())
                Alert.alert(error.toString());
            }
        }
    
    }

    export async function login(email, pass, props) {
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass).then((firebaseUser) => {
              if (firebaseUser) {
                console.log("uId: " + firebaseUser.user.uid);
                global.uID = firebaseUser.user.uid;
                props.navigation.navigate('ListMovies', {email: email});
              }
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorMessage);
              Alert.alert(error.toString());
            });
        //console.log("Logged In!");
    } catch (error) {
        console.log(error.toString())
        Alert.alert(error.toString());
    }
    }

    export async function GravarMovie(movie) {
    try {
        id = movie.id;
        title = movie.title;
        overview = movie.overview;
        poster_path = movie.poster_path;
        await firebase.database().ref('favoritos/'+uID+'/' + movie.id).set({        
            id,
            title,
            overview,
            poster_path
        }).then((data)=>{
            Alert.alert("Filme " + title + " adicionado aos favoritos com sucesso!");
            propsAPP.navigation.navigate('Favoritos');
        }).catch((error)=>{
            console.log('error ' , error)
        })
        } catch (error) {
            console.log(error.toString())
        }
    }

    export  async function  readData() {
        var a = []
        await firebase.database().ref('Dados/').orderByChild('acertos').on("child_added", function (snapshot) {
            
            console.log("readData()  " + snapshot.val());
            
            console.log(snapshot.val().email + " Acertos " + snapshot.val().acertos);             
        });
    }

   



