import React from 'react';

export default React.createClass({
    displayName: 'Form',
    render() {
        return (
            <form>
                {this.props.children}
            </form>
        );
    }
});