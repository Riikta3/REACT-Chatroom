import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  msgList: state.messages
});

export default connect(mapStateToProps)(Messages);
