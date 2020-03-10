import React from "react";
import styled from "styled-components";

export default function BtnClose({ showNav }) {
  return <BtnClose href="#" showNav={showNav}></BtnClose>;
}

const BtnClose = styled.a`
z-index: 30;
position: absolute;
display: block;
left: 20px;
top: 60px;
font-size: 22px;
color: #fff;
  // left: ${props => (props.showNav ? "20px" : "100%")}; //animation
`;
