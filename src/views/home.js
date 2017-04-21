import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'views/Home';
    }

    render() {
        return (
            <div>
                Welcome home.
            </div>
        );
    }
}