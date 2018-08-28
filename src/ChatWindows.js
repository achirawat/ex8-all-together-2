import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddMessage from './AddMessage';
import MessageHistory from './MessageHistory';

class ChatWindows extends Component {
    onMessage = message => {
        this.props.onMessage(this.props.user.username, message);
    };
    render() {
        const {messages, user} = this.props;
        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{user.username}</div>
                <MessageHistory messages={messages} user={user}/>
                <AddMessage onMessage={this.onMessage} />
            </div>
        )
    }
}

ChatWindows.propType = {
    onMessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
};

export default ChatWindows;