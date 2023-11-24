import 'firebaseui/dist/firebaseui.css'

import * as firebaseui from 'firebaseui'

import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import firebase from 'firebase/compat/app';
import { firebaseUi } from '../../firebase';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginFirebase() {
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult: any, redirectUrl: any) {
        console.log(authResult);
        console.log(redirectUrl);

        return true;
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
      GoogleAuthProvider.PROVIDER_ID
    ]
  };

  useEffect(() => {
        firebaseUi.start('#firebaseui-auth-container', uiConfig);
    }, []);

    return (
        <>
            <h1 className="text-center my-3 title">Login Page</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader" className="text-center">Loading form</div>
        </>
    )
}