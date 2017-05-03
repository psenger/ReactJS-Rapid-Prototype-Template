
import {safeGet}from '../../utils';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {withRouter} from 'react-router';
import Form from '../../components/form';
import {bindActionCreators} from 'redux';
import * as ProfilesActions from '../../actionCreators/profilesAction';
import {FormGroup,ControlLabel,FormControl,HelpBlock,Button,Table} from 'react-bootstrap';

const columns = [{key: '_id', name: 'ID'},
    {key: 'name.first', name: 'First'},
    {key: 'name.last', name: 'Last'},
    {key: 'email', name: 'Email'}];

export class UserProfiles extends Component {

    constructor(props) {
        super(props);
        this.displayName = 'containers/UserProfiles';
        this.onSubmit = this.onSubmit.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderCol = this.renderCol.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
    }

    onSubmit() {
        this.props.profilesActionDispatcher.requestProfiles();
    }

    onChange(){

    }

    getValidationState(){
        // valid values are ["success","warning","error",null]
        return null;
    }

    /**
     * Well this might not be be the best method of determining the column
     * with the router link (eg  col.key === '_id' ) but it will do for now.
     */
    renderCol(row) {
        return (col, ii) => {
            return (
                <td key={ii}>
                    { col.key === '_id' ? (
                        <Link to={{pathname: `/userProfiles/${row._id}`}}>{safeGet(row, col.key)}</Link>
                    ):(
                        <div>{safeGet(row, col.key)}</div>
                    )}
                </td>
            );
        }
    }

    renderRow(row, i) {
        return (
            <tr key={i}>{columns.map(this.renderCol(row))}</tr>
        );
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                        <ControlLabel>Search Name</ControlLabel>
                        <FormControl type="text" placeholder="Enter search name" onChange={this.onChange}/>
                        <FormControl.Feedback />
                        <HelpBlock>Enter a name to search</HelpBlock>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.onSubmit}>Submit</Button>
                </Form>

                <hr/>

                <Table responsive striped bordered condensed>
                    <thead>
                        <tr>
                            {columns.map((row, i) => {
                                return (<td key={i}>{row.name}</td>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.profiles.map(this.renderRow)}
                    </tbody>
                </Table>
            </div>
        );
    }
}

// needed to allow specific context to be brought down.
UserProfiles.contextTypes = {
    theme: PropTypes.object.isRequired
};

let mapStateToProps = (store /*, ownProps */) => {
    return {
        profiles: store.profilesReducer.profiles
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        profilesActionDispatcher: bindActionCreators(ProfilesActions, dispatch)
    };
};

/**
 * If you are using withRouter to prevent updates from being blocked by shouldComponentUpdate,
 * it is important that withRouter wraps the component that implements shouldComponentUpate.
 * For example, when using Redux:
 * https://reacttraining.com/react-router/web/api/matchPath
 */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfiles));