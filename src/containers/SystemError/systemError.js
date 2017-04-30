
import React, {Component} from 'react';

export default class SystemError extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'containers/SystemError';
    }

    render() {
        return (
            <div>
                System Error
            </div>
        );
    }
}