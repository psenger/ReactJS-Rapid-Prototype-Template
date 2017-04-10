// import {Link} from 'react-router-dom';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default React.createClass({
    displayName: 'Nav',
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <NavLink to="/" className="navbar-brand">Claims</NavLink>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            {this.props.navMap.map(function(option,index){ return(<li key={index}><NavLink to={option.path} activeClassName="active">{option.label}</NavLink></li>); })}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});