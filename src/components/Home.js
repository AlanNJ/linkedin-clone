import React from "react";
import styled from "styled-components";
import LeftSide from "./LeftSide";
import Right from "./Right";
import Main from "./Main";
import store from "../store/index";
import { connect } from "react-redux";

export const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in a hurry? -</a>
        </h5>
        <p>
          {" "}
          -Find talented pros in record time with upwork and keep business
          moving
        </p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <Right />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;
const Section = styled.div`
  text-align: center;
  min-height: 50px;
  box-sizing: content-box;
  display: flex;
  justify-content: center;

  text-decoration: underline;
  padding: 16px 0px;
  h5 {
    color: #0a66c2;
    font-size: 18px;
    a {
      font-weight: 800;
    }
  }
  p {
    font-size: 18px;
    font-weight: bolder;
    color: #434649;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-areas: "left main right";
  column-gap: 25px;
  row-gap: 25px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Home);
