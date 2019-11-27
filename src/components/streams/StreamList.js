import React from "react";
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/';
import { Link } from 'react-router-dom'

class StreamList extends React.Component {

  componentDidMount(){
    this.props.fetchStreams();
  }
  
  renderAdmin(stream){
    console.log(stream.title + " | " + stream.userId + " | " + this.props.currentUserId);
    if(stream.userId === this.props.currentUserId){
      return(
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link className="ui button negative">
            Delete
          </Link>
        </div>
      )
    }
  }

  renderCreate(){
    if(this.props.isSignedIn){
      return(
        <div>
          <Link to="/streams/new" className="ui fluid button green"><i className="icon plus" /> Add New</Link>
        </div>
      )
    }
  }

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
            
          </div>
        </div>
      )
    })
  }


  render(){
    return (
      <div>
        <div>
          <h2 className="ui left floated">Streams</h2>
          {this.renderCreate()}
        </div>
        <div className='ui celled list'>{this.renderList()}</div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    streams : Object.values(state.streams),
    currentUserId : state.auth.userId,
    isSignedIn : state.auth.isSignedIn
  };
}

export default connect (
  mapStateToProps,
  {fetchStreams}
  )(StreamList);
