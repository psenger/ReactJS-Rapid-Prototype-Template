
import Home from './home/Home';
import About from './about/About';
import NotFound from './notFound/NotFound';
import Nav from '../components/nav';
import React, {Component} from 'react';
import UserProfile from './userProfile/UserProfile';
import UserProfiles from './userProfiles/UserProfiles';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

const viewMap = [
    {path: '/',                 component: Home,         label: 'Home',     },
    {path: '/userProfiles',     component: UserProfiles, label: 'Profiles', children: [ { path: '/userProfiles/:id', component: UserProfile, label: 'Profiles'} ] },
    {path: '/about',            component: About,        label: 'About',    }
];

/**
 * Recursively flatten the map, pulling the deepest child to the top of the array.
 * Router-Switch recognizes the order of the route path's with the intent of specificity.
 * Therefore the most specific paths need to be first. AND, children of menus should
 * be routes that look like proper rest paths... respecting the specificity.
 * I delete children because it is a reserved word in the props of Route
 */
const flatViewMap = ( items ) => {
    let retList = [];
    let subList = [];
    if ( items && Array.isArray( items ) && items.length !== 0 ) {
        items.map( (d) => {
            let dz = Object.assign({},d);
            if ( dz.children && Array.isArray( dz.children ) && dz.children.length !== 0 ) {
                dz.children.map( (c) => subList.push(c) );
            }
            delete dz.children;
            retList.push( dz );
        });
    }
    if ( subList.length !== 0 ) {
        return flatViewMap( subList ).concat( retList )
    }
    return retList;
};

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
                    <Nav navMap={viewMap}/>
                    <main>
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
