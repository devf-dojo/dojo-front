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
      apiKey: "AIzaSyD1VJ6FzFYDVm0NTAh4bE-_I4M7pdH5uZo",
      authDomain: "devf-dojo-admin.firebaseapp.com",
      databaseURL: "https://devf-dojo-admin.firebaseio.com",
      projectId: "devf-dojo-admin",
      storageBucket: "devf-dojo-admin.appspot.com",
      messagingSenderId: "183887932653"
      }
      if(!firebase.apps.length){
        firebase.initializeApp(config)
      }
  }
}

</script>
