import React from "react";
import _ from 'lodash';
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  }
  
  render(){
    if(this.props.isSignedIn){

      return (
        <div>
          <h3>Edit Stream</h3>
          <StreamForm
            initialValues={_.pick(this.props.stream, 'title', 'description')}
            onSubmit={this.onSubmit}
          />
        </div>
      );

    }else{

      return (
        <h3>Please, SIGN IN above to edit a stream. </h3>
      );
    }
  }
  
};

const mapStateToProps = (state, ownProps) => ({
  stream : state.streams[ownProps.match.params.id],
  isSignedIn : state.auth.isSignedIn
});

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);
