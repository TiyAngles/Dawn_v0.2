import React from "react";
import styled from "styled-components";

import MenuWrapper from "./MenuWrapper";
import Dimmed from "./Dimmed/Dimmed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Nav({ showNav, handleNavSlide }) {
  const hideNav = () => {
    handleNavSlide();
  };

  return (
    <Container showNav={showNav}>
      <BtnClose href="#" showNav={showNav} onClick={hideNav}>
        <FontAwesomeIcon icon={faTimes} />
      </BtnClose>
      <Dimmed />
      <MenuWrapper />
    </Container>
  );
}

const Container = styled.nav`
  z-index: 30;
  position: absolute;
  transition: left 0.4s ease-in-out;
  left: ${props => (props.showNav ? "0" : "100%")};
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 940px) {
    float: right;
    z-index: 30;
    position: static;
    left: auto;
    width: auto;
    height: auto;
  }
`;

const BtnClose = styled.a`
  z-index: 30;
  position: absolute;
  display: block;
  transition: left 0.4s ease-in-out;
  left: ${props => (props.showNav ? "20px" : "100%")};
  top: 60px;
  font-size: 22px;
  color: #fff;
`;
