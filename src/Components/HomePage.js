import React from 'react';
import Blog from "./Blog";
import GoogleLogin  from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userLogin';
import "../css/style.css"
const HomePage = () => {
        const dispatch = useDispatch();
        const login = (response)=>{
            console.log(response);
            dispatch(setSignedIn(true));
            dispatch(setUserData(response.profileObj));
        };
    const isSignedIn = useSelector(selectSignedIn)
    return (
        <div className="home_page" style={{display:isSignedIn ? "none":"" }}>
            {!isSignedIn && (<div className="login_message">
                <h1> Login using Google Account</h1>
                <GoogleLogin
      clientId="510465928596-shjok25b4pl7k9d1h9vdm8nd69srij6s.apps.googleusercontent.com"
      render = {(renderProps)=>(
          <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className="login_button">Login with google</button>
      )}
      onSuccess={login}
      onFailure = {login}
      isSignedIn = {true}
      cookiePolicy = {"single_host_origin"}
      />
</div>)}
        </div>
    );
}

export default HomePage;
