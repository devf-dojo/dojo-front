<template id="">
  <div class="">

    <a class="waves-effect waves-light btn" v-on:click="login( )"><i class="material-icons right">GitHub</i>log in
  </a>

  </div>

</template>
<script>

import * as firebase from 'firebase'

export default {

  data () {
    return {

      }
    },
  methods: {
    login () {
      var provider = new firebase.auth.GithubAuthProvider()
      firebase.auth().signInWithPopup(provider).then(result=>{console.log(result)})
    }
  },
  beforeCreate(){
      var config = {
        apiKey: "AIzaSyCnOVutlPNWFZsbCcqnTMYaNYxjisj23E0",
        authDomain: "devf-dojo.firebaseapp.com",
        databaseURL: "https://devf-dojo.firebaseio.com",
        projectId: "devf-dojo",
        storageBucket: "devf-dojo.appspot.com",
        messagingSenderId: "963729866738"
      }
      if(!firebase.apps.length){
        firebase.initializeApp(config)
      }
  }
}

</script>
