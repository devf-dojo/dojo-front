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
      console.log(this.$firebase.auth())
      const provider = this.$firebase.auth.GithubAuthProvider()
      this.$firebase.auth().signInWithPopup(provider).then(result=>{console.log(result)})

    }
  }
}

</script>
