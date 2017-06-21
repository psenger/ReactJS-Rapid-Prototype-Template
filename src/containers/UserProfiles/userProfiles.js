import { safeGet } from '../../utils';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Form from '../../components/form/Form';
import { bindActionCreators } from 'redux';
import I18NInjector from '../../decorator/i18nInjector';
import * as ProfilesActions from '../../actionCreators/profilesAction';
import { Button, ControlLabel, FormControl, FormGroup, HelpBlock, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const columns = [{key: '_id', name: 'ID'},
  {key: 'name.first', name: 'First'},
  {key: 'name.last', name: 'Last'},
  {key: 'email', name: 'Email'}];

@I18NInjector()
export class UserProfiles extends Component {

  constructor (props) {
    super(props);
    this.displayName = 'containers/UserProfiles';
    this.onSubmit = this.onSubmit.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderCol = this.renderCol.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
  }

  onSubmit () {
    this.props.profilesActionDispatcher.requestProfiles();
  }

  onChange () {

  }

  getValidationState () {
    // valid values are ["success","warning","error",null]
    return null;
  }

  /**
   * Well this might not be be the best method of determining the column
   * with the router link (eg  col.key === '_id' ) but it will do for now.
   */
  renderCol (row) {
    return (col, ii) => {
      return (
        <td key={ii}>
          { col.key === '_id' ? (
            <Link to={{pathname: `/userProfiles/${row._id}`}}>{safeGet(row, col.key)}</Link>
          ) : (
            <div>{safeGet(row, col.key)}</div>
          )}
        </td>
      );
    };
  }

  renderRow (row, i) {
    return (
      <tr key={i}>{columns.map(this.renderCol(row))}</tr>
    );
  }

  render () {
    return (
      <div data-component-name={this.displayName}>
        <h1>{this.props.i18n.translate('Profiles Search')}</h1>
        <Form>
          <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
            <ControlLabel>{this.props.i18n.translate('Search Name')}</ControlLabel>
            <FormControl type="text" placeholder={this.props.i18n.translate('Enter search name')} onChange={this.onChange} />
            <FormControl.Feedback />
            <HelpBlock>{this.props.i18n.translate('Enter a name to search')}</HelpBlock>
          </FormGroup>
          <Button bsStyle="primary" onClick={this.onSubmit}>{this.props.i18n.translate('Submit')}</Button>
        </Form>
        <hr />
        <Table responsive={true} striped={true} bordered={true} condensed={true}>
          <thead>
            <tr>
              {columns.map((row, i) => {
                return (<td key={i}>{row.name}</td>);
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

/**
 * Map a specific store's state to the props.
 *
 * @param {*} state - the state of the store/reducer
 * @returns {{profiles: (*|Array)}}
 */
let mapStateToProps = (state /*, ownProps */) => {
  return {
    profiles: state.profilesReducer.profiles
  };
};

/**
 * Map the Action(s)'s Dispatcher(s) to the props. The way this is written all the action's dispatch functions are
 * mapped to the given name space.
 *
 * @param dispatch
 * @returns {{profilesActionDispatcher: (A|B|M|N)}}
 */
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

UserProfiles.propTypes = {
  i18n: PropTypes.object.isRequired,
  profilesActionDispatcher: PropTypes.object,
  profiles: PropTypes.array
};
