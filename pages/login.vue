<template>
  <div class="black-text">
    <div id="login"
           class="center-align valign-wrapper" v-if="!user.auth">
        <a v-on:click="login()"
           class="waves-effect waves-light btn valign">
          <i class="fa fa-github giticon" aria-hidden="true"></i>
            log in
        </a>
    </div>
    <div v-if="user.auth" class="row">
      <div class="col s10 offset-s1">
        <div class="card">
          <div class="row">
            <div class="col s2">
              <img :src="user.avatar" class="avatar" />
            </div>
            <div class="col s10">
              <div class="input-field col s6">
                <input id="name" type="text" class="validate" v-model="cv.name">
                <label for="name">Nombre</label>
              </div>
              <div class="input-field col s6">
                <input id="email" type="email" class="validate" v-model="cv.email">
                <label for="email">Email</label>
              </div>
              <div class="input-field col s12">
                <textarea id="bio" v-model="cv.bio" class="materialize-textarea"></textarea>
                <label for="bio">Resumen</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s6">
              <div class="col s10">
                <label>Browser Select</label>
                <select class="browser-default" v-model="cinta">
                  <option value="" disabled selected>Choose your option</option>
                  <option value="blanca">Blanca</option>
                  <option value="roja">Roja</option>
                  <option value="backend">Backend</option>
                  <option value="frontend">Frontend</option>
                  <option value="android">Android</option>
                  <option value="ios">IOS</option>
                </select>
              </div>
              <div class="col s2">
                <a class="btn-floating waves-effect waves-light red" v-on:click="pushCinta()">
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="col s12">
                <ul>
                  <li v-bind:key="item" v-for="item in cv.cintas">{{item}}</li>
                </ul>
              </div>
            </div>
            <div class="col s6">
              <div class="col s10 input-field">
                <input type="text" name="skill" id="skill" v-model="skill">
                <label for="skill">Skill</label>
              </div>
              <div class="col s2">
                <a class="btn-floating waves-effect waves-light red" v-on:click="pushSkill()">
                  <i class="material-icons">add</i>
                </a>
              </div>
              <div class="col s12">
                <ul>
                  <li v-bind:key="item" v-for="item in cv.skills">{{item}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .avatar{
    width: 100%;
    height: auto;
  }
  .card{
    margin-top: 20px;
    padding: 10px;
  }
</style>
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

/* const sendSlack = (msg) => {
  const webhookURI = 'https://hooks.slack.com/services/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'

  axios.post(`${webhookURI}`)

  $.ajax(
    {
      type: 'POST',
      dataType: 'json',
      url: webhookURI,
      data: 'payload=' + JSON.stringify({
        text: msg
      })
    }
  ).done(function () {
    console.log('DONE')
  }).fail(function (error) {
    console.log(error)
  }).always(function () {
    console.log('COMPLETE')
  })
} */

/* const getUserAPI = function (uid, token) {
  const url = 'https://us-central1-devf-dojo-admin.cloudfunctions.net/api/v1/dojo/get_user'
  axios.post(`${url}`, {
    uid: uid
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }})
    .then(response => console.log(response))
    .catch(error => console.warn(error))
} */
</script>
<style>
  .giticon{
    margin: 0 5px;
  }

  #login{
    width:100%;
    height:100vh;
  }

  #login a{
    margin: 0 auto;
  }

</style>
