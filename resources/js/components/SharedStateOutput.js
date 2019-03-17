import React from 'react';
import store from '../store';
import ReactDOM from 'react-dom';
import { view } from 'react-easy-state'

class SharedStateOutput extends React.Component {
    render() {
        return (
            <a href="#">
                Shared state output: <strong>{ store.example }</strong>
            </a>
        )
    }
}

[].forEach.call(document.querySelectorAll('shared-state-output'), element => {
    const Reactive = view(SharedStateOutput);
    ReactDOM.render(<Reactive/>, element);
});
