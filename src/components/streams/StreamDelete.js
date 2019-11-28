import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { deleteStream } from "../../actions";
import history from "../../history";

class StreamDelete extends React.Component {

  render(){

    const actions = [
      {
        label : 'Delete',
        class : 'negative',
        fn : () => this.props.deleteStream(this.props.streamId)
      },
      {
        label : 'Cancel',
        class : null,
        fn : () => history.push('/')
      }
      
    ];

    return (
      <div>
        StreamDelete
        <Modal title="Delete Stream" content="Are you sure you want to delete this stream?" actions={actions} onDismiss={() => history.push('/')}/>
      </div>
    );

  }
};

const mapStateToProps = (state, ownProps) => {
  return ({
    streamId : ownProps.match.params.id
  });
}

export default connect(mapStateToProps, { deleteStream })(StreamDelete);