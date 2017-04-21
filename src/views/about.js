import React, {Component} from 'react';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'views/About';
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1>About this project</h1>
                    <p>The purpose of this program is to create a sandbox, a playground for exploring design patterns
                        and new technology in ReactJS.</p>
                    <p>Currently, a simple ReactJS Rapid Prototype Template, based on Aik and includes ReactJS, React
                        Router, Redux, and Twitter Bootstrap.</p>
                    <p><a className="btn btn-primary btn-lg" role="button"
                          href="https://github.com/psenger/ReactJS-Rapid-Prototype-Template/blob/master/README.md"
                          rel="external" target="_blank">Learn more</a></p>
                    <p><a className="btn btn-primary btn-lg" role="button"
                          href="https://github.com/psenger/ReactJS-Rapid-Prototype-Template" rel="external"
                          target="_blank">Explore the project on Github</a></p>
                </div>
                <br/>
                <pre className="well well-sm">MIT License Copyright (c) 2017 Philip A Senger</pre>
            </div>
        );
    }
}