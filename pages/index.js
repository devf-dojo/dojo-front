import React, {Component} from 'react'
import * as firebase from 'firebase'
import Button from 'material-ui/Button'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import App from '../components/App'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
}

class Index extends Component {
  state = {
    open: false
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  };

  handleClick = () => {
    this.setState({
      open: true
    })
  };
  
  login () {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render () {
    return (
      <App>
        <div style={styles.container}>
          <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color='primary' onClick={this.handleRequestClose}>OK</Button>
            </DialogActions>
          </Dialog>
          <Typography type='display1' gutterBottom>Material-UI</Typography>
          <Typography type='subheading' gutterBottom>example project</Typography>
          <Button raised color='accent' onClick={this.handleClick}>
            Super Secret Password
          </Button>
          <Button raised color='accent' onClick={this.login}>
            Github Login
          </Button>
          <p>Hello World!</p>
        </div>
      </App>
    )
  }
}

export default Index
