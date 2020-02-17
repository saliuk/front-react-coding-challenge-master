// @flow
import React from 'react';
import { IMessage } from '../../models/message.model';

type Props = {
  newMessage: IMessage,
};

function Message({ newMessage }: Props) {
  return <p>{newMessage.message}</p>;
}

export default Message;
