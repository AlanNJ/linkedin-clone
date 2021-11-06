import React from "react";
import styled from "styled-components";
import { signInApi } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router";

export const Login = (props) => {
  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav>
        <a href="/">
          <img src="images/login-logo.svg" alt="linkedIn" />
        </a>
        <div>
          <Join>Join Now</Join>
          <Sign>Sign In</Sign>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your Professional Community</h1>
          <img src="images/login-hero.svg" alt="" />
        </Hero>
        <Google onClick={() => props.signIn()}>
          <img src="images/google.svg" alt="" />
          {"   "}Sign In With Google
        </Google>
      </Section>
    </Container>
  );
};
const Container = styled.div``;
const Nav = styled.nav`
  max-width: 100%;
  margin: auto;
  padding: 12px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      width: 120px;
    }
  }
`;
const Join = styled.a`
  font-size: 21px;
  font-weight: 300;
  padding: 10px 10px;
  margin: 0 10px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 2px;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.09);
  }
`;
const Sign = styled.a`
  font-size: 21px;
  padding: 10px 16px;
  color: #0a66c2;
  box-shadow: inset 0 0 0 1px #0a66c2;
  font-weight: 600;
  border-radius: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 7px 5px;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.09);
    text-decoration: none;
  }
`;

const Section = styled.div`
  display: flex;
  padding-top: 40px;

  margin-top: 30px;
  min-height: 700px;
  width: 100%;
  flex-wrap: wrap;
`;
const Hero = styled.div`
  width: 100%;
  h1 {
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 300;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 30px;
      width: 100%;
      line-height: 50px;
      padding-bottom: 30px;
    }
  }
  img {
    position: absolute;
    right: 10px;
    top: 150px;
    width: 700px;
    height: 570px;
    @media (max-width: 768px) {
      height: initial;
      width: initial;
      position: initial;
    }
  }
`;
const Google = styled.button`
  margin-top: 100px;
  height: 50px;
  width: 40%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 400px;
  position: absolute;
  margin: 0 20px;
  background: #fff;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 /40%), inset 0 0 0 2px rgb(0 0 0 /0%),
    inset 0 0 0 1px rgb(0 0 0 /0%);
  vertical-align: middle;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.75);
    color: rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 768px) {
    position: initial;
    bottom: 20px;
    width: 100%;
    margin-bottom: 10px;
    padding: 0 20px;
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInApi()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
