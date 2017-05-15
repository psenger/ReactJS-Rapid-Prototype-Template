
import React from "react";
import PropTypes from "prop-types";

const I18NInjector = () => {
    return ComponentToWrap => class extends ComponentToWrap {
            static contextTypes = {
              i18n: PropTypes.object.isRequired
            };
            constructor(props, context) {
                super(props, context);
                this.displayName = "decorator/i18nInjector";
            }
            render() {
                const { i18n } = this.context;
                return (<ComponentToWrap {...this.props} i18n={i18n} data-component-name={this.displayName}/>);
            }
    }
};

export { I18NInjector as default };
