import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet, MuiThemeProvider } from 'material-ui/styles'
import { getDefaultContext } from '../styles/createDefaultContext'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styleSheet = createStyleSheet('App', theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      fontFamily: theme.typography.fontFamily,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale' // Antialiasing.
    },
    body: {
      margin: 0
    },
    a: {
      color: 'inherit'
    }
  }
}))

let AppWrapper = props => props.children

AppWrapper = withStyles(styleSheet)(AppWrapper)

class App extends Component {
  componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { styleManager, theme } = getDefaultContext()
    return (
      <MuiThemeProvider styleManager={styleManager} theme={theme}>
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography type="title" color="inherit">
                Title
              </Typography>
            </Toolbar>
          </AppBar>
          <AppWrapper>
            {this.props.children}
          </AppWrapper>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App