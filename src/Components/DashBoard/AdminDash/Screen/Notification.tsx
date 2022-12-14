import React from "react";
import styled from "styled-components";
import EventScreen from "./Events";

function Notification() {
  return (
    <Container>
      <EventScreen />
    </Container>
  );
}

export default Notification;

const Container = styled.div`
  margin-top: 80px;
  /* width: 100%; */
  width: calc(100vw - 230px);
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;

  background-color: #f7f9fc;
  /* background-color: gold; */
  overflow: hidden;
  position: absolute;
  right: 0px;
  // top: 50px;

  @media screen and (max-width: 1100px) {
    width: 95%;
  }
  @media screen and (max-width: 1005px) {
    width: 100%;
  }

  /* background-color: #352b1e; */
`;
