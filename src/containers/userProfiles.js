
import {connect} from "react-redux";
import Form from '../components/form';
import React, {Component} from 'react';
import Input from '../components/input';
import {bindActionCreators} from 'redux';
import {fetchProfiles} from '../services/api';
import FormGroup from '../components/formGroup';
import * as ProfilesActions from '../actionCreators/profilesAction';

const columns = [   { key: '_id',        name: 'ID' },
    { key: 'name.first', name: 'First' },
    { key: 'name.last',  name: 'Last' },
    { key: 'email',      name: 'Email' } ];

const safeGet = (obj, key, defaultVal) => {
    if ((obj === undefined) || (obj === null)) return defaultVal;
    if (typeof obj[key] !== 'undefined') return obj[key];
    return key.split('.').reduce(function(o, x) {
        return (typeof o == 'undefined' || o === null) ? ((typeof defaultVal !== 'undefined') ? defaultVal : o) : o[x];
    }, obj);
};

export class UserProfiles extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/UserProfiles';
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        fetchProfiles()
            .then( (data) => {
                return this.props.profilesActionDispatcher.updateProfiles(data);
            } );
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup inputId="first" label="Search Name">
                        <div>
                            <Input id="first"
                                   type="text"
                                   className="form-control"
                                   aria-describedby="firstHelp"
                                   placeholder="Enter search name"
                                   tabIndex="0" />
                            <small id="firstHelp" className="form-text text-muted">Enter a name to search</small>
                        </div>
                    </FormGroup>
                    <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </Form>

                <hr/>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            { columns.map( (row, i) => { return (<td key={i}>{row.name}</td>) } ) }
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.profiles.map(function(row, i) {
                            return (
                                <tr key={i}>
                                    { columns.map( ( col, ii ) => { return ( <td key={ii}>{ safeGet( row, col.key ) }</td> ) } ) }
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

let mapStateToProps = ( store, ownProps ) => { return { profiles: store.profilesReducer.profiles } };
let mapDispatchToProps = (dispatch) => { return { profilesActionDispatcher: bindActionCreators(ProfilesActions, dispatch) }; };
export default connect(mapStateToProps, mapDispatchToProps)( UserProfiles );