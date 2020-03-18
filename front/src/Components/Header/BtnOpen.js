import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function BtnOpen({ handleNavSlide }) {
  const menuSlide = () => {
    handleNavSlide();
  };
  return (
    <Container href="#" onClick={menuSlide}>
      <span>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </Container>
  );
}

const Container = styled.a`
  position: absolute;
  z-index: 20;
  display: block;
  width: 60px;
  height: 60px;
  top: 0;
  right: 0;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  color: #2e8bff;

  @media screen and (min-width: 940px) {
    display: none;
  }
`;
