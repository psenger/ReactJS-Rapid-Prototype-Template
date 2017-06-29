import Home from './home/home';
import About from './about/about';
import SampleProgressBars from './sampleProgressBars/sampleProgressBars';
import { flatViewMap } from '../utils';
import SignUp from './signUp/signUp';
import React, { Component } from 'react';
import NotFound from './notFound/notFound';
import { Nav, Navbar } from 'react-bootstrap';
import UserProfile from './userProfile/userProfile';
import UserProfiles from './userProfiles/userProfiles';
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';

const viewMap = [
  {path: '/', component: Home, label: 'Home'},
  {
    path: '/userProfiles',
    component: UserProfiles,
    label: 'Profiles',
    children: [{path: '/userProfiles/:id', component: UserProfile, label: 'Profiles'}]
  },
  {path: '/progressBar', component: SampleProgressBars, label: 'Dynamic Progress bars'},
  {path: '/signUp', component: SignUp, label: 'Sign Up'},
  {path: '/about', component: About, label: 'About'}
];

export default class App extends Component {

  constructor (props, context) {
    super(props, context);
    this.displayName = 'views/App';
    this.state = {routes: flatViewMap(viewMap)};
  }

  render () {
    return (
      <div data-component-name={this.displayName}>
        <Router>
          <div>
            <Navbar collapseOnSelect={true} role='navigation'>
              <Navbar.Header>
                <Navbar.Brand>
                  <NavLink to='/' className='navbar-brand'>ReactJS</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  {viewMap.map((option, index) => {
                    return (
                      <li role='presentation' key={index}>
                        <NavLink key={index} to={option.path} activeClassName='active'>{option.label}</NavLink>
                      </li>
                    );
                  })}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <main id='main' role='main'>
              <Switch>
                {this.state.routes.map((option, index) => {
                  return (
                    <Route key={index} exact={true} {...option} />
                  );
                })}
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

/**

 Appears to have problems with the version of React Im using.... regarding refs which this package does.

 // import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 <ReactCSSTransitionGroup transitionName='fadeIn'
 transitionAppear={true}
 transitionEnterTimeout={3000}
 transitionLeaveTimeout={3000}>
 </ReactCSSTransitionGroup>
 **/
