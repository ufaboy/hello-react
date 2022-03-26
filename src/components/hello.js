import React, {Component} from 'react';
import Logo from "./logo";
import Clock from "./clock";

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            mode: 'MODE_CREATE',
            filter: 'FILTER_ALL',
            list: 'getAll'
        }
    }

    render() {
        return (
            <main className="main">
                <Logo alt="logo_svg"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Clock />
            </main>
        )
    }
}