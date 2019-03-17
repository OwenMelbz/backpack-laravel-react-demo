import React from 'react'
import ReactDOM from "react-dom";
import ReactPasswordStrength from "react-password-strength";

class PasswordMeter extends React.Component {

    changed($event) {
        document.getElementById(this.props.input).value = $event.password;
    }

    render() {
        return (
            <ReactPasswordStrength
                minLength={5}
                minScore={2}
                scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                changeCallback={ (event) => this.changed(event) }
                inputProps={{ name: "password_input", autoComplete: "off", className: "form-control" }}
            />
        )
    }
}

[].forEach.call(document.querySelectorAll('password-meter'), element => {
    ReactDOM.render(<PasswordMeter input={element.getAttribute('input')}/>, element)
});
