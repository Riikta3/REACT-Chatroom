import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ConnectedMessage from 'src/containers/Message';

import './messages.scss';

const Messages = ({ msgList }) => {
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [msgList]); // tableau de dépendances

  return (
    <div
      ref={listRef}
      className="messages-list"
    >
      {msgList.map((message) => (
        <ConnectedMessage
          author={message.author}
          content={message.content}
          key={message.content + message.author}
        />
      ))}
    </div>
  );
};

Messages.propTypes = {
  msgList: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Messages;
