<template id="" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="">
    <a class="waves-effect waves-light btn" v-on:click="login()"><i class="material-icons right"></i>log in</a>
  </div>
</template>

<script>
import * as firebase from 'firebase'
import axios from 'axios'

const sendSlack = (msg) => {
    const webhookURI = 'https://hooks.slack.com/services/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';

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
};

const getUserAPI = function (uid) {
    const url = 'https://us-central1-devf-dojo-admin.cloudfunctions.net/api/v1/dojo/get_user';
    axios.post(`${url}`,{
        uid:uid
      },{
      headers:{
        "Content-Type":"application/json"
      }})
      .then(response=>console.log(response))
      .catch(error=>console.warn(error))
};


export default {

  data () {
    return {

      }
    },
  methods: {
    login () {
      const provider = new firebase.auth.GithubAuthProvider()
      firebase.auth().signInWithPopup(provider).then((result) => {
          const uid = result.user.uid;
          getUserAPI(uid)
      },(error) => {
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
      }

      if(!firebase.apps.length){
        firebase.initializeApp(config)
      }
  }
}

</script>
