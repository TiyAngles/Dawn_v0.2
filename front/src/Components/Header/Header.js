import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SearchBox from "./SerachBox";
import BtnOpen from "./BtnOpen";
import Nav from "./Nav";
import "./style.css";
export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const handleNavSlide = () => {
    setShowNav(!showNav);
  };
  return (
    <Container>
      <HeaderInner>
        {/* <!--logo--> */}
        <Logo />
        {/* <!--//logo--> */}
        <SearchBox />
        {/* <!--btnOpen--> */}
        <BtnOpen handleNavSlide={handleNavSlide} />
        {/* <!--//btnOpen--> */}
        <Nav showNav={showNav} handleNavSlide={handleNavSlide} />
        {/* <!----> */}
      </HeaderInner>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

const HeaderInner = styled.div`
  background: #fff;
  width: 100%;
  height: 60px;
  position: relative;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
`;
