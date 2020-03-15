import React from "react";
import styled from "styled-components";

import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Container = styled.div`
  background: #fff;
  border-top: 1px solid #ccc;
`;
const FooterInner = styled.div`
  padding-top: 64px;
  @media screen and (min-width: 940px) {
    padding-top: 64px;
  }
`;
export default function Footer() {
  return (
    <Container>
      <FooterInner>
        <FooterTop />
        <FooterBottom />
      </FooterInner>
    </Container>
  );
}
