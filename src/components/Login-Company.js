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

const SignUpCompany = (props) => {
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
            <Card.Title>Sign In</Card.Title>
            <Card.Text>
              Don’t have an account? <Link to={RoutesPath.signUpCompany}> Sign Up Now</Link>
            </Card.Text>
            <Form>
              <Form.Group className="form-shell">
                <Form.Control
                  type="email"
                  id="authEmail"
                  placeholder="Email"
                  onChange={handleEmailValue}
                  value={props.authEmailInitialValue}
                />
              </Form.Group>
              <Form.Group className="form-shell">
                <Form.Control
                  type="password"
                  id="authPassword"
                  placeholder="Password"
                  onChange={handlePasswordValue}
                  value={props.authPasswordInitialValue}
                />
              </Form.Group>
            </Form>
            <div className="bottom-fields between">
              <Link to="#">Forgot password?</Link>
              <Button
                className="custom-btn"
                onClick={() => {
                  dispatch(addSize(props.size));
                  dispatch(signedWizardNextSteps());
                  navigate(RoutesPath.addCompany);
                }}
              >
                Continue
              </Button>
            </div>
            <div className="bottom-title">Or continue with</div>
            <div className="bottom-icons">
              <div className="icon">
                <img src="./images/facebook-3 logo.svg" alt="" />
              </div>
              <div className="icon">
                <img src="./images/github logo.svg" alt="" />
              </div>
              <div className="icon">
                <img src="./images/Google logo.svg" alt="" />
              </div>
              <div className="icon">
                <img src="./images/Group 244.svg" alt="" />
              </div>
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

export default enhancer(SignUpCompany);
