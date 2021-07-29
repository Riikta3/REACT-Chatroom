import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './message.scss';

const Message = ({ isMine, author, content }) => (
  <div className={classNames('message', { 'message--mine': isMine })}>
    <div className="message__author">{author}</div>
    <p className="message__content">{content}</p>
  </div>
);

Message.propTypes = {
  isMine: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
