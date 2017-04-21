/**
 * Created by psenger on 7/04/2017.
 */
import React, {Component} from 'react';
import { fetchProfiles } from '../services/api';
import UserProfileGrid from '../containers/profiles/userProfileGrid';
import * as ProfilesActions from '../actionCreators/profilesAction';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

export class UserProfiles extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'views/UserProfiles';
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        console.log('onSubmit');
        fetchProfiles()
            .then( (data) => {
                return this.props.profilesActionDispatcher.updateProfiles(data);
            } ); // (data) => this.props.profilesAction.updateProfiles(data), (msg) => this.props.profilesAction.updateMessage(msg)
    }

    render() {
        // this.props.profiles
        return (
            <div>
                <UserProfileGrid onSubmit={this.onSubmit} />
            </div>
        );
    }
}

let mapStateToProps = ( store, ownProps ) => { return { profiles: store.profileReducer.profiles } };
let mapDispatchToProps = (dispatch) => { return { profilesActionDispatcher: bindActionCreators(ProfilesActions, dispatch) }; };
export default connect(mapStateToProps, mapDispatchToProps)(UserProfiles);