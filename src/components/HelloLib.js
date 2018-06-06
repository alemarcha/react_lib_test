import React, {Component} from "react";
import { helloActions } from "../actions/hello.actions";
import { connect } from "react-redux";

class HelloLib extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }
    render() {
        return (
            <div>
                Hello World
                <button onClick={this.handleSubmit}>Prueba click</button>    
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(helloActions.helloAction());
      }
}

function mapStateToProps(state) {
    const { hello_value } = state.helloFunc;
    return {
        hello_value
    };
  }
  
const connectedHelloLib = connect(mapStateToProps)(HelloLib);
export { connectedHelloLib as HelloLib };