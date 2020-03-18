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

const Container = styled.div`
  &::after {
    display: block;
    content: "";
    clear: both;
  }

  z-index: 30;
  position: absolute;
  right: 0;
  bottom: 0;
  border-top: 1px solid #2e8bff;
  ul {
  }
  li {
    float: left;
    display: block;
    width: 50%;
    line-height: 40px;
    &:first-child {
      a {
        color: #fff;
        background: linear-gradient(0.25turn, #d061fe, #2e8bff);
      }
    }
  }
  a {
    display: block;
    text-align: center;
    background: #fff;
    box-sizing: border-box;
  }

  @media screen and (min-width: 940px) {
    position: relative;
    padding-left: 12px;
    float: left;
    right: auto;
    bottom: auto;
    border-top: none;
    &::before {
      position: absolute;
      top: 50%;
      transform: translate(-700%, -40%);
      display: block;
      content: "";
      width: 1px;
      height: 14px;
      background: #333;
    }
    &::after {
      display: block;
      content: "";
      clear: both;
    }
    li {
      width: auto;
      line-height: 79.9px;
      padding: 0 12px;
      font-size: 14px;
      &:first-child {
        a {
          color: #2e8bff;
          background: #fff;
        }
      }
    }
    a {
      background: #fff;
      color: #444;
    }
  }
`;

// const ON = css`
//   a {
//     display: block;
//     text-align: center;
//     background: #fff;
//     color: #fff;
//     border: 1px solid transparent;
//     background: linear-gradient(0.25turn, #d061fe, #2e8bff);
//     @media screen and (min-width: 940px) {
//       color: #2e8bff;
//       background: #fff;
//     }
//   }
// `;
// ${props =>
//   props.selected === "join"
//     ? `&:last-child{
//   ${ON};
// }`
//     : `&:first-child{
//   ${ON};
// }`}
