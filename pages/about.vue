<template>

	<div class="container" onload="">
	    <!-- Page Content goes here -->
		<div class="row">
			<div class="col s2 m6 l12 center">
        <i class="large material-icons">account_circle</i>
      </div>
		</div>

		<div class="row">
			<div class="col s12 m6 l6 center">
				<div class="input-field col s12 m12 l12">
					<input placeholder="Emmanuel Beltran Fuentes" id="full_name" type="text" class="validate">
					<label for="full_name">Nombre</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="mail@correo.com" id="email" type="email" class="validate">
					<label for="email">Email</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="5520163598" id="phone" type="text" class="validate">
					<label for="phone">Telefono</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="www.mysite.com" id="web_site" type="text" class="validate">
					<label for="web_site">Sitio Web</label>
				</div>

				<!-- <div class="col s6">
          <div class="col s6">
            <p>Select</p>
          </div>
				</div> -->
				<!-- <div class="col s2">
          <a class="btn-floating waves-effect waves-light Black" v-on:click="pushIdioma()">
            <i class="material-icons">add</i>
          </a>
        </div> -->

				<div class="input-field col s12 m6 l12">
					<textarea id="textarea1" class="materialize-textarea"></textarea>
				 	<label for="textarea1">Acerca de ti</label>
				</div>
			</div>
		<div class="col s6">
      <div class="col s5">
         <label>Que cintas cursaste</label>
         <select class="browser-default" v-model="cinta">
           <option value="" disabled selected>Selecciona cinta</option>
           <option value="blanca">Blanca</option>
           <option value="roja">Roja</option>
           <option value="backend">Backend</option>
           <option value="frontend">Frontend</option>
           <option value="android">Android</option>
           <option value="ios">IOS</option>
         </select>
       </div>
			 <!-- <span class="col s5">
			 	<label>En que bach estuviste</label>
				<select class="browser-default" v-model="cinta">
					<option value="" disabled selected>Selecciona bach</option>
					<option value="blanca">Bach 1</option>
					<option value="roja">Roja</option>
					<option value="backend">Backend</option>
					<option value="frontend">Frontend</option>
					<option value="android">Android</option>
					<option value="ios">IOS</option>
				</select>
			</span> -->
        <div class="col s2">
          <a class="btn-floating waves-effect waves-light black" v-on:click="pushCinta()">
           <i class="material-icons">add</i>
         </a>
       </div>
       <div class="col s12">
         <ul>
           <li v-bind:key="item" v-for="item in cv.cintas">{{item}}</li>
         </ul>
       </div>


		<div class="s6">
      <div class="col s6 m6 l10 input-field">
        <input type="text" name="skill" id="skill" v-model="skill">
        <label for="skill">Skill</label>
      </div>
      <div class="col s1">
        <a class="btn-floating waves-effect waves-light black" v-on:click="pushSkill()">
          <i class="material-icons">add</i>
        </a>
      </div>
      <div class="col s12">
        <ul>
          <li v-bind:key="item" v-for="item in cv.skills">{{item}}</li>
        </ul>
      </div>
		</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="https//app.url.com" id="twitter" type="url" class="validate">
					<label for="web_site">Twitter</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="https//app.url.com" id="facebook" type="url" class="validate">
					<label for="web_site">Facebookr</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="https//app.url.com" id="linkedin" type="url" class="validate">
					<label for="web_site">Linkedin</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="https//app.url.com" id="github" type="url" class="validate">
					<label for="web_site">Github</label>
				</div>
			</div>
		</div>
		<div class="col s12 m12 l12 center">
			<button class="btn" type="submit" name="action">Enviar
	 			<i class="material-icons right">send</i>
 			</button>
		</div>
	</div>


</template>

<script>
import * as firebase from 'firebase'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      cv: {
        name: '',
        email: '',
        cintas: [],
        skills: [],
        bio: '',
        telefono: '',
        interests: [],
        hoobies: []
      },
      cinta: '',
      skill: ''
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
          // const uid = result.user.uid
          // getUserAPI(uid, token)
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
    },
    pushCinta () {
      if (this.cinta) {
        this.cv.cintas.push(this.cinta)
        this.cinta = ''
      }
    },
    pushSkill () {
      if (this.skill) {
        this.cv.skills.push(this.skill)
        this.skill = ''
      }
    },
    deleteCinta (cinta) {
      this.cv.cintas = this.cv.cintas.filter(value => value != cinta)
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
