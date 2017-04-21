import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Form from "../../components/form";
import FormGroup from "../../components/formGroup";
// import MultiFormGroup from "../containers/multiFormGroup";
import Input from "../../components/input";
import {bindActionCreators} from 'redux';
import * as ProfilesAction from '../../actionCreators/profilesAction';
import { fetchProfiles } from '../../services/api';
// import TableOfProfiles from '../containers/tableOfProfiles';
import * as ProfilesActions from '../../actionCreators/profilesAction';

const columns = [   { key: '_id', name: 'ID' },
    // { key: 'name.first', name: 'First' },
    // { key: 'name.last', name: 'Last' },
    { key: 'email', name: 'Email' } ];
const rowGetter = (i)=>this.props.profiles[i];
const rowCounter = ()=>this.props.profiles.length;

// const columns = [{ key: 'id', name: 'ID' }, { key: 'title', name: 'Title' }];
// const rows = [{ id: 1, title: 'Title 1' }, { id: 2, title: 'Txxxxx' }];
// const rowGetter = rowNumber => rows[rowNumber];

export class UserProfileGrid extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'containers/profiles/userProfileGrid';
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
                    <button type="button" className="btn btn-primary" onClick={this.props.onSubmit}>Submit</button>
                </Form>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.profiles.map(function(row, i) {
                        return (
                            <tr key={i}>
                                <td>{row['_id']}</td>
                                <td>{row['email']}</td>
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
export default connect(mapStateToProps, mapDispatchToProps)( UserProfileGrid );


/**
 * rowGetter={(rowNumber) => this.props.profiles[rowNumber]}
 *
 *
 {(this.props.profiles||[]).map(function (item,i) {
                         return (<tr key={i}>
                             <td>{item.name.first}</td>
                             <td>{item.name.last}</td>
                             <td>{item.email}</td>
                             <td>xxxxxxx</td>
                         </tr>)
                     })}
 */
