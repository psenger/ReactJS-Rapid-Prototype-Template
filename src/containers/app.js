
import Home from './Home/home';
import About from './About/about';
import {flatViewMap} from '../utils';
import SignUp from './SignUp/signUp';
import React, {Component} from 'react';
import NotFound from './NotFound/notFound';
import {Navbar,Nav} from 'react-bootstrap';
import UserProfile from './UserProfile/userProfile';
import UserProfiles from './UserProfiles/userProfiles';
import {HashRouter as Router, Route, Switch,NavLink} from 'react-router-dom';

const viewMap = [
    {path: '/',                 component: Home,         label: 'Home',     },
    {path: '/userProfiles',     component: UserProfiles, label: 'Profiles', children: [ { path: '/userProfiles/:id', component: UserProfile, label: 'Profiles'} ] },
    {path: '/signUp',           component: SignUp,       label: 'Sign Up',  },
    {path: '/about',            component: About,        label: 'About',    }
];

export default class App extends Component {

    constructor(props,context) {
        super(props,context);
        this.displayName = 'views/App';
        this.state = { routes: flatViewMap( viewMap ) };
    }

    render() {
        return (
            <div data-component-name={this.displayName}>
                <Router>
                   <div>
                        <Navbar collapseOnSelect role='navigation'>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <NavLink to="/" className="navbar-brand">ReactJS</NavLink>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    {viewMap.map((option,index) => {
                                        return(
                                          <li role="presentation">
                                            <NavLink key={index} to={option.path} activeClassName="active">{option.label}</NavLink>
                                          </li>
                                        );
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <main id="main" role="main">
                            <Switch>
                                {this.state.routes.map((option, index) => {
                                  return (
                                    <Route key={index} exact {...option} />
                                  );
                                })}
                                <Route component={NotFound}/>
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

 <ReactCSSTransitionGroup transitionName="fadeIn"
 transitionAppear={true}
 transitionEnterTimeout={3000}
 transitionLeaveTimeout={3000}>
 </ReactCSSTransitionGroup>
 **/
