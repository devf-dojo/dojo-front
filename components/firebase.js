import React, { Component } from 'react'
import * as firebase from 'firebase'

let instance = null;

class Firebase extends Component {
  config = {
    apiKey: 'AIzaSyD1VJ6FzFYDVm0NTAh4bE-_I4M7pdH5uZo',
    authDomain: 'devf-dojo-admin.firebaseapp.com',
    databaseURL: 'https://devf-dojo-admin.firebaseio.com',
    projectId: 'devf-dojo-admin',
    storageBucket: 'devf-dojo-admin.appspot.com',
    messagingSenderId: '183887932653'
  }

  constructor(props) {
    super(props);
    // Singleton pattern to avoid initializing multiple times.
    if (!instance) {
      firebase.initializeApp(this.config);
      instance = this;
    }
    return instance;
  }

  login () {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      console.log('Caught error');
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      var email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(credential);
      // ...
    });
  }
}

export default Firebase
