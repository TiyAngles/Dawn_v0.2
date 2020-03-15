import React from "react";
import styled from "styled-components";

const Container = styled.div`
  //footer-top
  padding: 0 20px;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

const FooterTopBox = styled.div`
  // footer=top > div
  float: left;
  width: 100%;
  h2 {
    font-size: 2em; //h2가 안먹혀서 폰트 스타일 추가
    font-weight: 700; //h2가 안먹혀서 폰트 스타일 추가
    a {
      display: block;
    }
    img {
      height: 30px;
    }
  }
  h3 {
    padding-top: 22px;
    font: 700 16px/1.37 "Roboto Condensed";
    letter-spacing: 0.02rem;
    color: #333;
    @media screen and (min-width: 940px) {
      font-size: 18px;
    }
  }
  ul {
    padding-top: 24px;
    padding-bottom: 12px;
    li {
      font: 400 14px/1.42 "Roboto Condensed";
      letter-spacing: 0.02rem;
      color: #555;
      span {
        font-weight: 700;
        padding-right: 2px;
      }
      a {
        color: #434343;
      }
    }
    @media screen and (min-width: 940px) {
      font-size: 16px;
    }
  }
  p {
    a {
      font-weight: bold;
      color: #3c97f9;
    }
  }
  &:nth-of-type(1) > ul {
    &::after {
      display: block;
      content: "";
      clear: both;
    }
    li {
      float: left;
      margin-right: 8px;
      background: #ccc;
      text-indent: -9999em;
      width: 44px;
      height: 44px;
      &:last-child {
        margin-right: 0;
      }
      @media screen and (min-width: 1200px) {
        margin-right: 22px;
        width: 72px;
        height: 72px;
      }
    }
  }
  @media screen and (min-width: 940px) {
    &:nth-of-type(1) {
      width: 25%;
    }
    &:nth-of-type(2) {
      padding-left: 2%;
      width: 23%;
    }
    &:nth-of-type(3) {
      padding-left: 2%;
      width: 23%;
    }
    &:nth-of-type(4) {
      width: 25%;
    }
  }
`;

export default function FooterTop() {
  return (
    <Container>
      <FooterTopBox>
        <h2>
          <a href="#">Tiyangle.co</a>
        </h2>
        <ul id="instagram-source">
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ul>
        <p>
          Follow us on <a href="#">tiyangle.co</a>
        </p>
      </FooterTopBox>
      <FooterTopBox>
        <h3>leave a message</h3>
        <ul>
          <li>
            <a href="#">dawn@tiyangle.co</a>
          </li>
          <li>
            <a href="tel:000-0000-0000">(+82) 000-0000-0000</a>
          </li>
        </ul>
      </FooterTopBox>
      <FooterTopBox>
        <h3>info</h3>
        <ul>
          <li>
            <a href="#">
              <span>T</span>erms <span>O</span>f <span>S</span>ervice terms of
              use
            </a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Inquiry Board</a>
          </li>
        </ul>
      </FooterTopBox>
      <FooterTopBox>
        <h3>maker</h3>
        <ul>
          <li>
            <span>PM</span>
            <a href="https://github.com/vapvin" target="_blank">
              문현규
            </a>
          </li>
          <li>
            <span>PUB & DESIGN</span>
            <a href="https://github.com/qkaxhfms" target="_blank">
              <span>P.L</span> 곽민상
            </a>
            <a href="https://github.com/sohyun0" target="_blank">
              <span>P.A</span> 위소현
            </a>
          </li>
          <li>
            <span>FRONT-END</span>
            <a href="https://github.com/kangdonghune" target="_blank">
              강동훈
            </a>
            <a href="https://github.com/spacedawn96" target="_blank">
              웅
            </a>
            <a href="https://github.com/peppermint100" target="_blank">
              페퍼민트
            </a>
          </li>
          <li>
            <span>BACK-END</span>
            <a href="https://github.com/pyeeun" target="_blank">
              <span>P.L</span> 예니
            </a>
          </li>
        </ul>
      </FooterTopBox>
    </Container>
  );
}
