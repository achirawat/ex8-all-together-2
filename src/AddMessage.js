import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
    state = {
        message: '',
    };

    handleInput = event => {
        const {value} = event.target;
        this.setState(() => ({
            message: value,
        }));
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onMessage(this.state.message);
    };

    isDisabled = () => {
        const { message } = this.state;
        return message === '';
    };

    render() {
        const {message} = this.state;

        return (
            <div>   
              <form className="input-group" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" placeholder="Enter your message..." value={message} onChange={this.handleInput}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
        )
    }
}

AddMessage.propType = {
    onMessage: PropTypes.func.isRequired,
};

export default AddMessage;