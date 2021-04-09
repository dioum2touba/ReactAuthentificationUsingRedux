import React, { Component } from 'react';

const AsyncComponent = (importComponent: any) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
            .then((cmp: any) => {
                this.setState({component: cmp.default});
            });
        }

        render() {
            const C = this.state.component;

            return C;// ? <C { ...this.props } /> : null;
        }
    }
};

export default AsyncComponent;