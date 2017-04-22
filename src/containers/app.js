
import Home from './home';
import About from './about';
import NotFound from './notFound';
import Nav from '../components/nav';
import React, {Component} from 'react';
import UserProfile from './userProfile';
import UserProfiles from './userProfiles';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

const viewMap = [
    {path: '/',                 com: Home,         label: 'Home',     children: []},
    {path: '/userProfiles',     com: UserProfiles, label: 'Profiles', children: [ { path: '/userProfiles/:id', com: UserProfile, label: 'Profiles'} ] },
    {path: '/about',            com: About,        label: 'About',    children: []}
];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'views/App';
    }

    render() {
        return (
            <Router>
                <div>
                    <Nav navMap={viewMap}/>
                    <main>
                        <Switch>
                            {viewMap.map((option, index) => {
                                return (
                                    <Route key={index} exact path={option.path} component={option.com} />
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

 // import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 <ReactCSSTransitionGroup transitionName="fadeIn"
 transitionAppear={true}
 transitionEnterTimeout={3000}
 transitionLeaveTimeout={3000}>
 </ReactCSSTransitionGroup>
 **/
