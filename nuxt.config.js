module.exports = {
  head:{
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link:[
      {rel:"stylesheet", href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},
      {rel:"stylesheet", href:"https://fonts.googleapis.com/icon?family=Material+Icons"},
      {rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.1/css/materialize.min.css"},
    ]
  },
  css:[
    '~/styles/main.scss'

  ]
};
