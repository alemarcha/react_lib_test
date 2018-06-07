import React, {Component} from "react";
import { byeActions } from "../actions/bye.actions";
import { connect } from "react-redux";
import { Button } from 'reactstrap';

class ByeLib extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { bye_value, hello_value } = this.props;

        return (
            <div className="row">
                <div className="col-4">
                    Good bye World 
                    <button onClick={this.handleSubmit}>Prueba click bye</button>    
                    hola {bye_value.toString()}
                    {hello_value.toString()}
                    <Button color="danger">Danger!</Button>
                </div>
                <div className="col-4" align="center">
                    <p>
                        <a href="https://github.com/alemarcha/MERN" target="_top">
                        MERN
                        </a>
                    </p>
                    <p>2018</p>
                </div>
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