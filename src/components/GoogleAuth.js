import React from 'react';

class GoogleAuth extends React.Component {

    state = {
        isSignedIn:null
    }

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                    '52215578675-8lb2mviq30rmr4aogdsbe475p8lrd5b1.apps.googleusercontent.com',
                    scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setUserStatus();
                this.auth.isSignedIn.listen(this.setUserStatus);
                /*this.setState({
                    isSignedIn : this.auth.isSignedIn.get()
                })*/
            });
        });
    }

    setUserStatus = () => {
        this.setState({
            isSignedIn : this.auth.isSignedIn.get()
        })
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
        console.log(this.auth);
        if(this.state.isSignedIn === null){
            return "";
        }else if(this.state.isSignedIn){
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

export default GoogleAuth;