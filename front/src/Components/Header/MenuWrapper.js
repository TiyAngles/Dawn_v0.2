import React from "react";
import styled from "styled-components";
import Gnb from "./Gnb";
import Rnb from "./Rnb";
const Container = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background: #fff;

  // CSS > 선택자 어떻게 처리하는지?
  div {
    position: absolute;
    right: 0;
    width: 100%;
  }
`;
export default function MenuWrapper() {
  return (
    <Container>
      <Gnb />
      <Rnb />
    </Container>
  );
}
