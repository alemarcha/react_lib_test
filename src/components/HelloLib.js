import React, {Component} from "react";
import { helloActions } from "../actions/hello.actions";
import { connect } from "react-redux";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class HelloLib extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Options
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                Helslo Wafsdorld
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