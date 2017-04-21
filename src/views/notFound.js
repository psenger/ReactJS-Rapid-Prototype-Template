import React, {Component} from 'react';

export default class NotFound extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'views/NotFound';
    }

    render() {
        return (
            <div>
                404 Not found
            </div>
        );
    }
}