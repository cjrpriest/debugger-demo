import React, { Component } from 'react';

export default class TestComponent extends Component {
    state = {
        number: 0,
    };

    constructor() {
        super();
        this.state = {
            number: 100,
        }
    }

    componentWillMount() {
        let b = this.props.a;
        let c = b + 1;
        this.setState({number: c})
    }

    // randomFunction = () => {
    //     let foo = "bar";
    //     let bar = "foo"
    // };

    randomFunction() {
        let foo = "bar";
        let bar = "foo"
    };

    render() {
        return(
            <div>
                <p>{this.state.number}</p>
            </div>
        )
    }
}