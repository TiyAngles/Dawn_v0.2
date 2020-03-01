import React from "react";
import styled from "styled-components";

import MenuWrapper from "./MenuWrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav({ showNav, handleNavSlide }) {
  const hideNav = () => {
    handleNavSlide();
  };

  return (
    <Container showNav={showNav}>
      <BtnClose href="#" showNav={showNav} onClick={hideNav}>
        <FontAwesomeIcon icon={faTimes} style={{ color: "black" }} />
      </BtnClose>
      <div id="dimmed"></div>
      <MenuWrapper />
    </Container>
  );
}

const Container = styled.nav`
  z-index: 30;
  position: absolute;
  left: ${props => (props.showNav ? "0" : "100%")};
  width: 100%;
  height: 100vh;
`;

const BtnClose = styled.a`
  z-index: 30;
  position: absolute;
  display: block;
  left: ${props => (props.showNav ? "20px" : "100%")};
  top: 60px;
  font-size: 22px;
  color: #fff;
`;
