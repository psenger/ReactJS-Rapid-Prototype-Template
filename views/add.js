/**
 * Created by psenger on 7/04/2017.
 */
import React from 'react';
import Form from '../containers/form';
import FormGroup from '../containers/formGroup';
import MultiFormGroup from '../containers/multiFormGroup';

export default React.createClass({
    displayName: 'Add',

    onSubmit() {
        console.log('xxxxx');
    },
    render() {
        return (
            <Form>
                <FormGroup inputId="email"
                           label="Email address">
                    <input id="email"
                           type="email"
                           className="form-control"
                           aria-describedby="emailHelp"
                           placeholder="Enter email"
                           tabIndex="0"/>
                    <small id="emailHelp"
                           className="form-text text-muted">We'll never share your email with anyone else.
                    </small>
                </FormGroup>

                <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
            </Form>
        );
    }
});