// @flow
import React from 'react';
import Container from 'react-bootstrap/Container';
import Creator from './components/Creator';
import MessageList from './components/MessageList';
import { IMessage } from './models/message.model';

type Props = {
  addMessageRequest: (newMessage: IMessage) => Function,
  messages: Array<IMessage>,
};

type IAddMessage = (message: string) => Function;

function Blog({ addMessageRequest, messages }: Props) {
  const addMessage: IAddMessage = (newMessage) => {
    addMessageRequest(newMessage);
  };
  return (
    <Container>
      <Creator addMessage={addMessage} />
      <MessageList messages={messages} />
    </Container>
  );
}
export default Blog;
