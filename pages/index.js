import React, {Component} from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from 'material-ui/Dialog'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import App from '../components/App'

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
    backgroundImage:'url(/static/dojo.jpg)',
    backgroundPosition:'center center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    height:300
  },
  card:{
    maxWidth:400,
    margin: '0 auto',
    backgroundColor: '#000'
  },
  heroText:{
    color:'#fff'
  }
}

class Index extends Component {

  render () {
    return (
      <App>
        <div style={styles.container}>
          <Card style={styles.card}>
            <h1 style={styles.heroText}>Dojo Dev.f</h1>
            <h3 style={styles.heroText}>El siguiente paso en tu carrera de desarrollador</h3>
          </Card>
        </div>
      </App>
    )
  }
}

export default Index