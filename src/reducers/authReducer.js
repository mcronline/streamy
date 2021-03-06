const INITIAL_USER_AUTH_STATUS = {
    isSignedIn: null,
    userId: null
  };
  
  const authReducer = (userAuthStatus = INITIAL_USER_AUTH_STATUS, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return { ...userAuthStatus, isSignedIn: true, userId: action.payload };
  
      case "SIGN_OUT":
        return { ...userAuthStatus, isSignedIn: false, userId: null };
  
      default:
        return userAuthStatus;
    }
  };

  export default authReducer;