import React from 'react'
import {
  Container,
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core'
import { lightTheme } from 'config/theme'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Landing from 'views/landing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Job from 'views/job'
import Todo from 'views/todo'
import Questionnaire from 'views/questionnaire'
import Topbar from 'components/Topbar'

toast.configure()

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  container: {
    paddingTop: 20,
  },
}))

const App = () => {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Topbar />
      <div className={classes.toolbar} />
      <Container className={classes.container}>
        <Router>
          <Switch>
            <Route path="/job" component={Job} />
            <Route path="/todo" component={Todo} />
            <Route path="/questionnaire" component={Questionnaire} />
            <Route path="/" component={Landing} />

            <Route
              path="/todo"
              render={() => (
                <div>
                  <Todo />
                </div>
              )}
            />
          </Switch>
        </Router>
      </Container>
    </MuiThemeProvider>
  )
}

export default App
