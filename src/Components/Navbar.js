import React from 'react';
import { GoogleLogout } from 'react-google-login';
import {useDispatch, useSelector } from 'react-redux';
import {selectSignedIn, selectUserData, setSignedIn, setUserData} from "../features/userLogin";
import "../css/navbar.css"
import Blog from './Blog';
const Navbar = () => {
    const userData = useSelector(selectUserData);
    const isSignedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch();
        const logout = (response)=>{
            dispatch(setSignedIn(false));
            dispatch(setUserData(null));
        };
    return (
        <>
        <div className="navbar">
            <h1 className="navbar_header">Blog Post</h1>  
            {isSignedIn && (<div className="navbar_user">
                <h1 className="signIn">{userData ?.givenName}</h1>
                <GoogleLogout clientId="510465928596-shjok25b4pl7k9d1h9vdm8nd69srij6s.apps.googleusercontent.com"
                render = {(renderProps)=>(
                    <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="Logout_button">LogOut</button>
                )}
                buttonText="LogOut"
                onLogoutSuccess={logout}
                />
            </div>)}        
            
        </div>
        {isSignedIn && (<Blog/>)}
        
        </>
    );
}

export default Navbar;
