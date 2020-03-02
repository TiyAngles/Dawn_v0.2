import React from "react";
import styled from "styled-components";

const Container = styled.div`
  z-index: 30;
  position: absolute;
  right: 0;
  bottom: 0;
  border-top: 1px solid #3c97f9;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  li {
    float: left;
    display: block;
    width: 50%;
    line-height: 40px;
  }
`;
export default function Rnb() {
  return (
    <Container>
      <ul>
        <li>
          <a href="#" className="on">
            LOGIN
          </a>
        </li>
        <li>
          <a href="#">JOIN US</a>
        </li>
      </ul>
    </Container>
  );
}
