/**
 * Created by psenger on 19/04/2017.
 */

import React, { Component } from 'react';
// import { omit } from 'lodash';

export default class TableOfProfiles extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'containers/TableOfProfiles';
        // this.printIt = this.printIt.bind(this);
    }

    // printIt(data){
    //     return ( <pre>{JSON.stringify(data,'\t',4)}</pre>)
    // }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                    {(this.props.data||[]).map((d)=> <tr><td>{d.name.first}</td><td>{d.name.last}</td><td>{d.email}</td><td>tbd</td></tr> )}
                </tbody>
            </table>
        );
    }
}