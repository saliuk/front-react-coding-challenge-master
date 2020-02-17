/* eslint-disable react/no-array-index-key */
// @flow
import React from 'react';
import { IMessage } from '../../models/message.model';
import Message from '../Message';

type Props = {
  messages: Array<IMessage>,
};

function MessageList({ messages }: Props) {
  return (
    <>
      {messages && messages.map((message, i) => <Message key={`message_${i}`} newMessage={message} />)}
    </>
  );
}

export default MessageList;
