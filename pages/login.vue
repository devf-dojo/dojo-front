<template id="" xmlns:v-on="http://www.w3.org/1999/xhtml">
      <div id="login"
           class="center-align valign-wrapper">
        <a v-on:click="login()"
           class="waves-effect waves-light btn valign">
          <i class="fa fa-github" aria-hidden="true"></i>
            log in
        </a>
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

/*const sendSlack = (msg) => {
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
}*/

/*const getUserAPI = function (uid, token) {
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
}*/
</script>
<style>
  i{
    margin: 0 5px;
  }

</style>
