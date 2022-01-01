import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { signOut } from "../actions/index";
import { Redirect } from "react-router-dom";

export const Header = (props) => {
  return (
    <Container>
      {!props.user && <Redirect to="/" />}
      <Content>
        <Logo>
          <a href="#">
            <img src="images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search"></input>
          </div>
          <SearchIcon>
            <img src="images/search-icon.svg" alt=""></img>
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="#">
                <img src="images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="images/nav-messaging.svg" alt="" />
                <span>Message</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a href="#">
                <img src="images/nav-network.svg" alt="" />
                <span>Network</span>
              </a>
            </NavList>
            <User>
              <a>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="images/user.svg" alt="" />
                )}

                <span>
                  me
                  <img src="images/down-icon.svg" alt="" />
                </span>
              </a>
              <SignOut onClick={() => props.signOut()}>
                <a>Sign Off</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  max-width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const Content = styled.div`
  display: flex;
  min-height: 100%;
  align-items: center;
`;
const Logo = styled.a`
  margin-right: 8px;
`;
const Search = styled.div`
  position: relative;
  opacity: 1;
  display: flex;
  align-items: center;
  & > div {
    max-width: 280px;
  }
  input {
    background-color: #eef3f8;
    box-shadow: none;
    border: none;
    height: 34px;
    font-size: 20px;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.9);
    border-color: #dce6f1;
    vertical-align: text-top;
    padding: 0 8px 0 34px;
  }
`;
const SearchIcon = styled.div`
  position: relative;
  right: 10px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
`;
const Nav = styled.div`
  display: block;
  padding: 0;
  position: absolute;
  right: 50px;
  z-index: 1000;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    min-width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  box-sizing: border-box;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid black;
      position: absolute;
      left: 0;
      bottom: 0;
      max-width: 100%;
      transition: transform 0.2s ease-in-out;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    padding: 0px;
  }
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 5px;
  display: none;
  width: 100px;
  height: 40px;
  transition-duration: 167ms;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
const User = styled(NavList)`
  a > img {
    width: 24px;
    border-radius: 50%;
    margin-left: 5px;
  }
  &:hover {
    ${SignOut} {
      display: block;
      transition: 0.2s ease;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: -100px;
    right: 0px;
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 768px) {
    top: 0px;
    right: 0px;
    display: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
