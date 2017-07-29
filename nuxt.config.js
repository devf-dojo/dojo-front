module.exports = {
  head:{
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link:[
        {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css"}
    ]
  },
  css:[
    '~/styles/main.scss'
  ],
  modules: [
    {
      src: '@rafamaciel/firebase',
      options: {
        apikey: '56f0c5f5e093d2a1c8cd',
        authDomain: 'devf-dojo-admin.firebaseapp.com',
        databaseURL: 'https://devf-dojo-admin.firebaseio.com',
        projectId: 'devf-dojo-admin',
        storageBucket: 'devf-dojo-admin.appspot.com',
        messagingSenderId: '183887932653'
      }
    }
  ]
}
