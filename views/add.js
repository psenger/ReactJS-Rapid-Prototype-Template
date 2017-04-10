/**
 * Created by psenger on 7/04/2017.
 */
import React from 'react';
import Form from '../containers/form';
import FormGroup from '../containers/formGroup';
import MultiFormGroup from '../containers/multiFormGroup';

export default React.createClass({
    displayName: 'Add',

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

                <div className="col-2">
                    <input type="text" className="form-control" placeholder=".col-2"/>
                </div>
                <div className="col-3">
                    <input type="text" className="form-control" placeholder=".col-3"/>
                </div>
                <div className="col-4">
                    <input type="text" className="form-control" placeholder=".col-4"/>
                </div>

                <MultiFormGroup id="dob_form-group"
                                label="Date of birth">
                    <div className="col-4">
                        <input type="number" min="1" max="31"
                               className="form-control"
                               id="dobDay"
                               aria-describedby="dobHelp"
                               aria-required="true"
                               placeholder="Enter Day"
                               tabIndex="0"/>
                    </div>
                    <div className="col-4">
                        <input type="number" min="1" max="12"
                               className="form-control"
                               id="dobMonth"
                               aria-describedby="dobHelp"
                               aria-required="true"
                               placeholder="Enter Month"
                               tabIndex="0"/>
                    </div>
                    <div className="col-4">
                        <input type="number" min="1900" max="2017"
                               className="form-control"
                               id="dobYear"
                               aria-describedby="dobHelp"
                               aria-required="true"
                               placeholder="Enter Year"
                               tabIndex="0"/>

                    </div>

                    <small id="dobHelp"
                           className="form-text text-muted">Enter your date of birth.
                    </small>

                </MultiFormGroup>

                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        );
    }
});