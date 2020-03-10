import React from "react";
import styled from "styled-components";
import "./dimmed.css";

export default function Dimmed() {
  return <Container id="dimmed"></Container>;
}

const Container = styled.div`
  @media screen and (min-width: 940px) {
    display: none;
  }
`;
