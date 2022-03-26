import React, {Component} from 'react';
import logo from "../assets/img/logo.svg";

export default class Logo extends Component {
    render() {
        return (
            <img src={logo} className="App-logo" alt={this.props.alt} title={this.props.alt} />
        )
    }
}