import React, {Component} from "react";

export function Validator () {
    return (Component) => {
        class ComponentWrapper extends Component {
            constructor(props, context) {
                super(props, context);
                this.displayName = "decorator/Validator.js";
            }
            render() {
                return <Component {...this.props} />;
            }
        }
        return ComponentWrapper;
    }
}