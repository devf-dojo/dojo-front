<template id="">
  <div class="">

    <a class="waves-effect waves-light btn" v-on:click="login( )"><i class="material-icons right"></i>log in
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
        apiKey: "#",
        authDomain: "#",
        databaseURL: "#",
        projectId: "#",
        storageBucket: "#",
        messagingSenderId: "#"
      }
      if(!firebase.apps.length){
        firebase.initializeApp(config)
      }
  }
}

</script>
