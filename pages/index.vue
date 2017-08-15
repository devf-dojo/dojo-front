<template>
    <div class="container">
        <!-- Page Content goes here -->
        <h1>Bienvenido a Devf!</h1>
	<div class="row">
		<div class="col l12">	
 		<h5>Forma parte del movimiento hacker más grande de América Latina. </h5> 
		</div>
	</div>
	<div class="row">
		<div class="col m4 s12">
		<figure>
			<img src="ninja.svg">
		</figure>
 		<p>Actualiza tus habilidades ninja</p>
		</div>
		<div class="col m4 s12">	
		<figure>
			<img src="curriculum.svg">
		</figure>
 		<p>Crea y comparte tu curriculum</p>
		</div>
		<div class="col m4 s12">	
		<figure>
			<img src="conversation.svg">
		</figure>
 		<p>Se parte de la comunidad de Devf</p>
		</div>
	</div>

	<div class="row">
		<div class="col s12 m12 l12 center">
			<a v-on:click="login()" class="light-green btn">Entrar</a>
		</div>
	</div>

	</div>
	
	<!-- <nuxt-link to="/about">Acerca de Devf</nuxt-link> <br> -->
   
</template>
<script>
import * as firebase from 'firebase'
import axios from 'axios'
import { mapState } from 'vuex'

export default {

  data () {
    return {
      cv:{
        name:'',
        email:'',
        cintas:[],
        skills:[],
        bio:'',
        telefono:'',
        interests:[],
        hoobies:[],

      }
    }
  },
  computed: mapState([
    'user'
  ]),
  methods: {
    login () {
      const store = this.$store
      const provider = new firebase.auth.GithubAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
        const user_data = result.user.providerData[0]
        console.log(result.user)
        console.log(user_data)
        firebase.auth().currentUser.getToken().then(function (token) {
          //const uid = result.user.uid
          //getUserAPI(uid, token)
          const user = {
            token: token,
            id: result.user.uid,
            email: user_data.email,
            avatar: user_data.photoURL
          }
          store.commit('saveUserData', user)
        })
      }, (error) => {
        sendSlack(error)
        console.log(error.code)
        console.log(error)
      })
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
      };

    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
  }
}

</script>
