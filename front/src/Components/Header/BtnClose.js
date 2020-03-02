import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export default function BtnClose({ showNav }) {
  return (
    <BtnClose href="#" showNav={showNav} onClick={}>
      <FontAwesomeIcon icon={faTimes} style={{ color: "black" }} />
    </BtnClose>
  );
}

const BtnClose = styled.a`
  z-index: 30;
  position: absolute;
  display: block;
  left: ${props => (props.showNav ? "20px" : "100%")};
  top: 60px;
  font-size: 22px;
  color: #fff;
`;
