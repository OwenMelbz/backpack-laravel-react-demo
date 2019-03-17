import React from 'react';
import store from '../store';
import ReactDOM from 'react-dom';
import { view } from 'react-easy-state'

class SharedStateInput extends React.Component {

    updateState($event) {
        store.example = $event.target.value
    }

    render() {
        return view((
            <div className="form-group" style={{ padding: '20px 10px' }}>
                <label htmlFor="sharedState" style={{ color: '#fff' }}>Shared state input:</label><br />
                <input defaultValue={store.example} className="form-control" id="sharedState" type="text" onChange={ (event) => this.updateState(event) } />
            </div>
        ))
    }
}

[].forEach.call(document.querySelectorAll('shared-state-input'), element => {
    ReactDOM.render(<SharedStateInput/>, element)
});
