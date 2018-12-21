import React from 'react';
import { Alert, View, Text} from 'react-native';

import * as firebase from "firebase";

let app = firebase.initializeApp({
        apiKey: "",
        authDomain: "",
        databaseURL: "https://quiz-ce212.firebaseio.com",
        projectId: "quiz-ce212",
        storageBucket: "",
        messagingSenderId: "379521318429"
    });

    export const db = app.database();

    export async function signup(email, pass, props) {

        try {
            await firebase.auth()
                .createUserWithEmailAndPassword(email, pass);
                console.log("Account created");
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
                uID = firebaseUser.user.uid;
                props.navigation.navigate('Perguntas', {email: email});
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

    export async function gravar(email, acertos) {
    try {
        await firebase.database().ref('Dados/'+email.toString().replace(".", "")+'/').set({
            email,
            acertos
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
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

   



