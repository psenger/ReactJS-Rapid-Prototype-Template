/**
 * Created by psenger on 7/04/2017.
 */

import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import About from './about';
import Add from './add';
import Home from './home';
import Nav from '../components/nav';
import NotFound from './notFound';

const viewMap = [
    { path: '/',      com: Home,  label: 'Home'  },
    { path: '/add',   com: Add,   label: 'Add'   },
    { path: '/about', com: About, label: 'About' }
];
export default React.createClass({
    displayName: 'App',
    render() {
        return (
            <Router>
                <div>
                    <Nav navMap={viewMap} />
                    <main>
                        <Switch>
                            {viewMap.map((option, index) => {
                                return(
                                    <Route key={index} exact path={option.path} component={option.com}/>
                                );
                            })}
                            <Route component={NotFound}/>
                        </Switch>
                    </main>
                </div>
            </Router>);
    }
});

/**

 // import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 <ReactCSSTransitionGroup transitionName="fadeIn"
 transitionAppear={true}
 transitionEnterTimeout={3000}
 transitionLeaveTimeout={3000}>
 </ReactCSSTransitionGroup>
 **/
