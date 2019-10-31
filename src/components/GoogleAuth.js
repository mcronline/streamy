import React from 'react';

class GoogleAuth extends React.component {

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                    '52215578675-8lb2mviq30rmr4aogdsbe475p8lrd5b1.apps.googleusercontent.com',
                    scope:'email'
            });
        });
    }

    render(){
        return <div>Google Auth</div>;
    }

}
