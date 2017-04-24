import {connect} from "react-redux";
import Form from '../../components/form';
import React, {Component} from 'react';
import Input from '../../components/input';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import {fetchProfiles} from '../../services/api';
import FormGroup from '../../components/formGroup';
import * as ProfilesActions from '../../actionCreators/profilesAction';

const columns = [{key: '_id', name: 'ID'},
    {key: 'name.first', name: 'First'},
    {key: 'name.last', name: 'Last'},
    {key: 'email', name: 'Email'}];

const safeGet = (obj, key, defaultVal) => {
    if ((obj === undefined) || (obj === null)) return defaultVal;
    if (typeof obj[key] !== 'undefined') return obj[key];
    return key.split('.').reduce(function (o, x) {
        return (typeof o == 'undefined' || o === null) ? ((typeof defaultVal !== 'undefined') ? defaultVal : o) : o[x];
    }, obj);
};

export class UserProfiles extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/UserProfiles';
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderCol = this.renderCol.bind(this);
    }

    onClick(row) {
        console.log(row);
    }

    onSubmit(e) {
        fetchProfiles()
            .then((data) => {
                return this.props.profilesActionDispatcher.updateProfiles(data);
            });
    }

    renderCol(row) {
        return (col, ii) => {
            return ( <td key={ii}>{ safeGet(row, col.key) }</td> );
        }
    }

    renderRow(row, i) {
        return (
            <tr key={i} onClick={() => this.onClick(row)}>{ columns.map(this.renderCol(row)) }</tr>
        );
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
                                   tabIndex="0"/>
                            <small id="firstHelp" className="form-text text-muted">Enter a name to search</small>
                        </div>
                    </FormGroup>
                    <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                </Form>

                <hr/>

                <table className="table table-bordered">
                    <thead>
                    <tr>
                        { columns.map((row, i) => {
                            return (<td key={i}>{row.name}</td>)
                        }) }
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.profiles.map(this.renderRow)}
                    </tbody>
                </table>
            </div>
        );
    }
}

let mapStateToProps = (store, ownProps) => {
    return {profiles: store.profilesReducer.profiles}
};
let mapDispatchToProps = (dispatch) => {
    return {profilesActionDispatcher: bindActionCreators(ProfilesActions, dispatch)};
};

/**
 * If you are using withRouter to prevent updates from being blocked by shouldComponentUpdate,
 * it is important that withRouter wraps the component that implements shouldComponentUpate.
 * For example, when using Redux:
 * https://reacttraining.com/react-router/web/api/matchPath
 */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfiles));