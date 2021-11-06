import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

export const LeftSide = (props) => {
  return (
    <MainContainer>
      <Container>
        <UserInfo>
          <CardBackground>
            <PhotoBack>
              <Photo />
            </PhotoBack>
            <Links>
              <h1>Welcome, {props.user ? props.user.displayName : "there!"}</h1>
              <h2>Add a photo</h2>
            </Links>
          </CardBackground>
        </UserInfo>
        <Widget>
          <div>
            <h1>Connections</h1>
            <h1>Grow your network</h1>
          </div>
          <img src="images/widget-icon.svg" alt="" />
        </Widget>
        <Item>
          <img src="images/item-icon.svg" alt="" alt="" />
          My Items
        </Item>
      </Container>
      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </MainContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(LeftSide);
const MainContainer = styled.div`
  grid-area: left;
`;
const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
const UserInfo = styled.div`
  height: 150px;
  border-radius: 1px solid black;
`;
const CardBackground = styled.div`
  background: url("images/card-bg.svg");
  height: 54px;
  border-radius: 5px;
`;
const PhotoBack = styled.div`
  position: relative;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  height: 70px;
  width: 70px;

  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const Photo = styled.div`
  background: url("images/photo.svg");
  z-index: 1000;
  height: 72px;
  width: 72px;
  background-repeat: no-repeat;
  position: relative;
  left: 35px;
  top: 35px;
  transform: translate(-41.5%, -40%);

  border-radius: 50%;
  align-items: center;
`;
const Links = styled.div`
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  h2 {
    color: #0a66c2;
    margin-top: 3px;
    font-size: 14px;
  }
`;
const Widget = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);

  div h1 {
    font-size: 15px;
    line-height: 1.333;
    &:first-child {
      left: 5%;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  div h2 {
    font-size: 12px;
    line-height: 1.333;
    color: rgba(0, 0, 0, 1);
  }
`;
const Item = styled.div`
  margin-top: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 2;
`;
const CommunityCard = styled(Links)`
  margin-top: 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  text-align: start;
  padding-left: 10px;
  a {
    &:hover {
      color: #0a66c2;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;

      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;
