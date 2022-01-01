import React from "react";
import styled from "styled-components";

export const Right = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <li>
            <Avatar />
            <div>
              <span>#linkedin</span>
              <button>follow</button>
            </div>
          </li>
          <li>
            <Avatar />
            <div>
              <span>#Video</span>
              <button>follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
    </Container>
  );
};
export default Right;
const Container = styled.div`
  grid-area: right;
  padding: 2px;

  margin-bottom: 25px;
`;
const FollowCard = styled.div`
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 2px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.div`
  padding: 2px 5px;

  li {
    margin-top: 10px;
    list-style: none;
    display: flex;

    align-items: center;
    & > div {
      display: flex;
      flex-direction: column;
      span {
        padding: 2px 10px;
        font-weight: 600;
      }
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 8px 10px;
      width: 90px;
      border-radius: 20px;
      text-align: center;
    }
  }
`;
const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  height: 40px;
  width: 40px;
  background-size: contain;
  margin-right: 8px;
  position: relative;
  bottom: 0px;
`;
const Recommendation = styled.div`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 7px;
  padding-bottom: 10px;
`;
