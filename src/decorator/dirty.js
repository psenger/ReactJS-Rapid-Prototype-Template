
import React from "react";

export const Dirty = () => {
  return ComponentToWrap => class extends ComponentToWrap {

    constructor(props, context) {
      super(props, context);
      this.displayName = "decorator/Dirty";
      this.state = {dirty: false};
    }

    setDirty(dirty, cb) {
      this.setState({dirty}, cb(dirty));
    }

    isDirty() {
      return this.state.dirty;
    }

    render() {
      return (<ComponentToWrap {...this.props} data-component-name={this.displayName}/>);
    }
  }
};

//
//     return (Component) => {
//         class ComponentWrapper extends Component {
//             constructor(props, context) {
//                 super(props, context);
//                 this.displayName = "decorator/Dirty";
//                 this.state = { dirty: false };
//             }
//             setDirty( dirty, cb ) {
//                 this.setState( { dirty }, cb( dirty ) );
//             }
//             isDirty() {
//                 return this.state.dirty;
//             }
//             render() {
//                 return <Component {...this.props} />;
//             }
//         }
//         return ComponentWrapper;
//     }
// }

export { Dirty as default };
