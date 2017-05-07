/**
 * Created by psenger on 5/7/17.
 */
import React, {Component} from "react";

export default function dirty () {
    return (Component) => {
        class ComponentWrapper extends Component {
            constructor(props, context) {
                super(props, context);
                this.displayName = "decorator/Dirty";
                this.state = { dirty: false };
            }
            setDirty( dirty, cb ) {
                this.setState( { dirty }, cb( dirty ) );
            }
            isDirty() {
                return this.state.dirty;
            }
            render() {
                return <Component {...this.props} />;
            }
        }
        return ComponentWrapper;
    }
}