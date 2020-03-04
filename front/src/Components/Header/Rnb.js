import React, { useState } from "react";
import styled, { css } from "styled-components";

export default function Rnb() {
  const [selected, setSelected] = useState("login");

  const onClickLogin = () => {
    setSelected("login");
  };

  const onClickJoin = () => {
    setSelected("join");
  };

  return (
    <Container selected={selected}>
      <ul>
        <li onClick={onClickLogin}>
          <a href="#">LOGIN</a>
        </li>
        <li onClick={onClickJoin}>
          <a href="#">JOIN US</a>
        </li>
      </ul>
    </Container>
  );
}
const ON = css`
  a {
    display: block;
    text-align: center;
    background: #fff;
    color: #fff;
    border: 1px solid transparent;
    background: linear-gradient(0.25turn, #d061fe, #3c97f9);
  }
`;

const Container = styled.div`
  z-index: 30;
  position: absolute;
  right: 0;
  bottom: 0;
  border-top: 1.2px solid #3c97f9;
  a {
    display: block;
    text-align: center;
    background: #fff;
    box-sizing: border-box;
    color: #3c97f9;
    background: #fff;
    height: 100%;
  }
  li {
    float: left;
    display: block;
    width: 50%;
    line-height: 40px;
    height: 100%;
    ${props =>
      props.selected === "join"
        ? `&:last-child{
      ${ON};
    }`
        : `&:first-child{
      ${ON};
    }`}
  }
  &::after {
    display: block;
    content: "";
    clear: both;
  }
`;
