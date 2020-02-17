// @flow
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IMessage } from '../../models/message.model';

type Props = {
  addMessage: (newMessage: IMessage) => {},
};

function Creator({ addMessage }: Props) {
  const [newMessage, setNewMessage] = useState({ message: '', date: null });

  const handleMessageChange = (e) => {
    setNewMessage({
      message: e.target.value,
      date: new Date(),
    });
  };

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();
    addMessage(newMessage);
    setNewMessage({ date: null, message: '' });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="newMessage.message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          onKeyPress={handleKeyPress}
          onChange={handleMessageChange}
          value={newMessage.message}
          as="textarea"
          rows="3"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Creator;
