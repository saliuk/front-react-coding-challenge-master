import { connect } from 'react-redux';
import Blog from '.';
import { AddMessageRequest } from '../../redux/actions/message.actions';

const mapStateToProps = state => ({
  messages: state.messages.messages,
});

const mapActionsToProps = dispatch => ({
  addMessageRequest: newMessage => dispatch(AddMessageRequest(newMessage)),
});

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(Blog);
