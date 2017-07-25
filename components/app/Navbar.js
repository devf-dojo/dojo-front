import React, { Component } from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Link from 'next/link'

const styleSheet = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
}

class Navbar extends Component {
  //Encargado de pasar los parametros al componente
  constructor(props){
    // Propiedes para heredar
    super(props)
    // Variables que se van a modificar
    this.state = {}
  }

  render(){
    return(
      <div style={styleSheet.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" style={styleSheet.flex}>
            <Link href="/" style={{'text-decoration': 'none'}}>Dev.f</Link>
          </Typography>
          <Button color="contrast">Registrarse</Button>
          <Button color="contrast">Iniciar Sesión</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}

export default Navbar