
import Home from './Home/Home';
import About from './About/About';
import React, {Component} from 'react';
import NotFound from './NotFound/NotFound';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import UserProfile from './UserProfile/UserProfile';
import UserProfiles from './UserProfiles/UserProfiles';
import {HashRouter as Router, Route, Switch,NavLink} from 'react-router-dom';
import {flatViewMap} from '../utils';

const viewMap = [
    {path: '/',                 component: Home,         label: 'Home',     },
    {path: '/userProfiles',     component: UserProfiles, label: 'Profiles', children: [ { path: '/userProfiles/:id', component: UserProfile, label: 'Profiles'} ] },
    {path: '/about',            component: About,        label: 'About',    }
];


export default class App extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'views/App';
        this.state = { routes: flatViewMap( viewMap ) };
    }

    render() {
        return (
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
                                        <NavItem key={index} href="#"><NavLink to={option.path} activeClassName="active">{option.label}</NavLink></NavItem>
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
            </Router>);
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
