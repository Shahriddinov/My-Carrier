import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import RoutesPath from "../routes/routes";

const NotFound = () => {
    const dispatch = useDispatch();
    const history = useNavigate()

    return (
        <div className="main_jop h-100">
            <div className="container">
                {/* <div className="position-absolute" >
                    <div className="logo">
                        <img style={{marginTop: "-100px", zIndex: "99900990"}} width="80%" src="./images/napa404.svg" alt="logo"/>
                    </div>
                </div> */}
                <div onClick={() => history(-1)} style={{ cursor:"pointer"}} className="w-100 d-flex justify-content-end post_back">
                    <div><img src="/images/back.png" className="me-2 mt-2" alt=""/></div>
                    <p className="back text-black">back</p>
                </div>
                <div className="row komputer">
                    <div className="col-6 d-flex justify-content-end">
                        <img className="" style={{zIndex: "10", marginBottom: "20%", marginRight: "-55%"}} width="80%" src="/images/404.svg" alt="Error"/>
                    </div>
                </div>
                <div className='mainText'>
                     Oops! this page doesn't exist
                </div>
                <div className='secondaryText'>
                Please<a onClick={() => history(-1)} style={{color: "#0D64C5", cursor: "pointer"}} className='secondaryText'>return</a> to the previous page, or visit our <Link to={RoutesPath.home}><span style={{color: "#0D64C5", cursor: "pointer"}} className='secondaryText'>home page</span></Link>.
                </div>
                <div className='secondaryText secondaryText1'>
                If the issue continues, visit our<span style={{color: "#0D64C5", cursor: "pointer"}} className='secondaryText'>Help Center</span>.
                </div>
                <div className="patternErrorPage">
                    <img src="./images/white-ell1.svg" alt="pattern"/>
                    <img src="./images/white-ell2.svg" alt="pattern"/>
                    <img src="./images/white-ell3.svg" alt="pattern"/>
                    <img src="./images/white-ell4.svg" alt="pattern"/>
                    <img src="./images/white-ell5.svg" alt="pattern"/>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
