<template id="" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="">
    <a class="waves-effect waves-light btn" v-on:click="login()"><i class="material-icons right"></i>log in</a>
  </div>
</template>

<script>
import * as firebase from 'firebase'

var sendSlack = function (msg) {
    var webhookURI = 'https://hooks.slack.com/services/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';

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




var getUserAPI = function (uid) {
    var url = 'https://us-central1-devf-dojo-admin.cloudfunctions.net/api/v1/dojo/get_user';
    var payload = JSON.stringify(uid);
    console.log(payload)

    $.ajax({
        url: url,
        type: 'POST',
        data: payload,
        contentType:"application/json; charset=utf-8",
        statusCode: {
            404: function (error) {
                sendSlack('No se encontro el recurso en la API ' +  url + ' ' + error)
            }
        }
    }).done(function (result) {
        console.log('SUCCESS')
        console.log(result)


    }).fail(function (error) {
        sendSlack('Ocurrio un error en la peticion a ' + url + ' '  + error)
    });
};


export default {

  data () {
    return {

      }
    },
  methods: {
    login () {
      var provider = new firebase.auth.GithubAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function (result) {
          var uid = result.user.uid;
          console.log(uid + 'UUID')
          getUserAPI({uid});

      }, function (error) {

          console.log(error.code)
          console.log(error)
      })
    }
  },
  beforeCreate(){
      var config = {
        apiKey: "#",
        authDomain: "devf-dojo-admin.firebaseapp.com",
        databaseURL: "https://devf-dojo-admin.firebaseio.com",
        projectId: "devf-dojo-admin",
        storageBucket: "devf-dojo-admin.appspot.com",
        messagingSenderId: "183887932653"
      };

      if(!firebase.apps.length){
        firebase.initializeApp(config)
      }
  }
}

</script>
