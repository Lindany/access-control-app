import React, { Component, useState  } from 'react';
import { withFirebase } from './Firebase';
import { makeStyles } from "@material-ui/styles";


const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
     <Messages />
  </div>
);
 

const MessageList = ({ messages }) => (
    <ul>
      {messages.map(message => (
        <MessageItem key={message.uid} message={message} />
      ))}
    </ul>
  );
   
class MessagesBase extends Component {
constructor(props) {
    super(props);
    
    this.state = {
        loading: false,
        messages: [],
    };
    }
    
    componentDidMount() {
    this.setState({ loading: true });
    
    this.props.firebase.messages().on('value', snapshot => {
        const messageObject = snapshot.val();
 
        if (messageObject) {
            const messageList = Object.keys(messageObject).map(key => ({
                ...messageObject[key],
                uid: key,
              }));
          this.setState({ 
            messages: messageList,  
            loading: false });
        } else {
          this.setState({ messages: null, loading: false });
        }
    });
    }
    
    componentWillUnmount() {
    this.props.firebase.messages().off();
    }
    
    render() {
    const { messages, loading } = this.state;
    
    return (
        <div>
        {loading && <div>Loading ...</div>}
        {messages ? (
          <MessageList messages={messages} />
        ) : (
          <div>There are no messages ...</div>
        )}
        </div>
    );
    }
}
const Messages = withFirebase(MessagesBase);


  const MessageItem = ({ message }) => (
    <li>
      <strong>{message.userId}</strong> {message.text}
    </li>
  );
 
export default HomePage;