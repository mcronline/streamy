import React from "react";
import StreamForm from './StreamForm'
import { connect } from 'react-redux';
import {createStream} from '../../actions';

class StreamCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {

    if(this.props.isSignedIn){

      return (
        <div>
          <h3>Create Stream</h3>
          <StreamForm onSubmit={this.onSubmit} />
        </div>
      );

    }else{

      return (
        <h3>Please, SIGN IN above to create a stream.</h3>
      )

    }
  }
}


const mapStateToProps = (state) => {
  return(
    {
      isSignedIn : state.auth.isSignedIn
    }
  )
}

export default connect(mapStateToProps, {createStream})(StreamCreate);
