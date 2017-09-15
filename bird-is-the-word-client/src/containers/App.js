import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {refreshAuth} from '../actions/sessionActions'
import User from '../components/User'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Game from '../containers/Game'



    

class App extends Component{
 
  render(){
    const PrivateRoute = ({component: Component, path, isAuthenticated}) => {
      return(
        <Route path={path} render={(props) => isAuthenticated ? <Component/> : <Redirect to={{pathname: '/'}} />} />
      )
    }
      return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/users/:username" component={() => <User user={this.props.session.currentUser} />} isAuthenticated={this.props.session.isAuthenticated} />
            <Route exact path= "/users/:username/game/:id" component={Game} />
          
          </ Switch>
        </Router>
      </div>
    )

    
  }
}

const mapStateToProps = state =>{
  return{
    session: state.session
  }
}

export default connect(mapStateToProps, {refreshAuth})(App)
