import React, { useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  addSize,
  displayCircle,
  signedWizardNextSteps,
} from "../actions/careerAction";
import { setAuthEmailValue, setAuthPasswordValue } from "../actions/authAction";
import RoutesPath from "../routes/routes";
import "../assets/styles/sign-up.scss";

const enhancer = connect(
  ({
    size: { size },
    auth: { authEmailInitialValue, authPasswordInitialValue },
  }) => ({
    size,
    authEmailInitialValue,
    authPasswordInitialValue,
  }),
  null
);

const VerificationCompany = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(displayCircle());
  }, []);

  const handleEmailValue = (event) => {
    dispatch(setAuthEmailValue(event.target.value));
  };
  const handlePasswordValue = (event) => {
    dispatch(setAuthPasswordValue(event.target.value));
  };

  return (
    <div className="signup">
      <div
        className={
          props.size ? "sign-in sign-in-card-show" : "sign-in sign-in-card-hide"
        }
      >
        <Card>
          <Card.Body>
            <Card.Title className="center">Check your email</Card.Title>
            <div className="d-flex justify-content-center">
              <img
                className="veriImg"
                src="./images/verification.svg"
                alt="pattern"
              />
            </div>
            <div className="bottom-fields">
              <div className="bottom-title">
                Check your qwerty123@gmail.com inbox for instructions from us on
                how to verify your account.
              </div>
            </div>
            <div className="go-login">
              <Link to={RoutesPath.loginCompany}>Go to login screen</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="col-11 d-flex justify-content-end unshow-tab">
        <img
          className=""
          style={{ zIndex: "10", marginTop: "5%" }}
          // width="80%"
          src="/images/signup-company.svg"
          alt="Error"
        />
      </div>
      <div className="pattern1 unshow-tab">
        <img src="./images/white-ell1.svg" alt="pattern" />
        <img src="./images/white-ell2.svg" alt="pattern" />
        <img src="./images/white-ell3.svg" alt="pattern" />
        <img src="./images/white-ell4.svg" alt="pattern" />
        <img src="./images/white-ell5.svg" alt="pattern" />
      </div>
      <div
        className={
          props.size
            ? "anime-carousel-wrapper show-tab carousels-show"
            : "anime-carousel-wrapper show-tab carousels-hide"
        }
      >
        <div className="anime-carousel">
          <div className="marquee">
            <div className="marquee--inner">
              <span>
                <div className="orb">
                  <img src="./images/first-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/second-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/third-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/fourth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/fifth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/sixth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/first-resume.png" alt="" />
                </div>
              </span>
              <span>
                <div className="orb">
                  <img src="./images/sixth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/fifth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/fourth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/third-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/first-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/second-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/first-resume.png" alt="" />
                </div>
              </span>
            </div>
          </div>
        </div>

        <div className="anime-carousel anime-carousel-second">
          <div className="marquee">
            <div className="marquee--inner">
              <span>
                <div className="orb">
                  <img src="./images/first-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/second-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/third-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/fourth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/fifth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/sixth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/first-resume.png" alt="" />
                </div>
              </span>
              <span>
                <div className="orb">
                  <img src="./images/sixth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/fifth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/fourth-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/third-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/first-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/second-resume.png" alt="" />
                </div>
                <div className="orb">
                  <img src="./images/first-resume.png" alt="" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default enhancer(VerificationCompany);
