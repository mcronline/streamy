import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                    '52215578675-8lb2mviq30rmr4aogdsbe475p8lrd5b1.apps.googleusercontent.com',
                    scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setUserAuthStatus(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.setUserAuthStatus);
            });
        });
    }

    setUserAuthStatus = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    signIn = (event) => {
        this.auth.signIn()
            .then(() => {
                this.renderAuthButton();
            });
    }

    signOut = (event) => {
        this.auth.signOut()
            .then(() => {
                this.renderAuthButton();
            });
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return "";
        }else if(this.props.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.signOut}>
                    <i className="google icon" />
                    Sign OUT
                </button>
            );
        }else{
            return (
                <button className="ui green google button" onClick={this.signIn}>
                    <i className="google icon" />
                    Sign IN with Google
                </button>
            );
        }
    }

    render(){

        return <div>{ this.renderAuthButton() }</div>;
    }

}

const mapStateToProps = (state) => {
    return {
        isSignedIn : state.auth.isSignedIn,
        userId : state.auth.userId
    }
}

export default connect(
    mapStateToProps,
    {signIn,signOut}
)(GoogleAuth);