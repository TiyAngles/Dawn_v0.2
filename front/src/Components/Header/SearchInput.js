import React from "react";
import styled from "styled-components";

export default function SearchInput({ showInput }) {
  return (
    <Container showInput={showInput}>
      <label htmlFor="i123456"></label>
      <input type="text" id="i123456" />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 10;
  right: 0;
  top: ${props => (props.showInput ? "60px" : "0")};
  opacity: ${props => (props.showInput ? "1" : "0")};
  background: #fff;
  width: 100%;
  height: 60px;
  transition: all 0.3s ease-out;
  label {
    position: absolute;
    top: 0;
    left: 0;
  }
  input[type="text"] {
    background: #fff;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    border: 2px solid #3c97f9;
    @media screen and (min-width: 940px) {
      height: 40px;
    }
  }
  @media screen and (min-width: 940px) {
    position: static;
    opacity: 1;
    width: 340px;
    padding-top: 20px;
  }
`;
