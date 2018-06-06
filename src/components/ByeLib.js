import React, {Component} from "react";
import { byeActions } from "../actions/bye.actions";
import { connect } from "react-redux";

class ByeLib extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { bye_value, hello_value } = this.props;

        return (
            <div>Good bye World 
                <button onClick={this.handleSubmit}>Prueba click bye</button>    
                hola {bye_value.toString()}
                {hello_value.toString()}
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(byeActions.byeAction());
      }
}

function mapStateToProps(state) {
    const { bye_value } = state.byeFunc;
    const { hello_value } = state.helloFunc;
    return {
        bye_value,
        hello_value
    };
  }
  
  const connectedByeLib = connect(mapStateToProps)(ByeLib);
  export { connectedByeLib as ByeLib };