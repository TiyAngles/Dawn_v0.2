import React from "react";
import styled from "styled-components";
import logoImg from "../img/logo.png";

export default function Logo() {
  return (
    <Container>
      <a href="#">
        <img src={logoImg} alt="logo" />
      </a>
    </Container>
  );
}

const Container = styled.h1`
  position: absolute;
  left: 10px;
  top: 0;
  a {
    display: block;
    position: relative;
    width: 100px;
    height: 60px;
    padding: 0 5px;
    img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
