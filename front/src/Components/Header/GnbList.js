import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GnbList({ detail, handleList, state }) {
  const onClick = () => {
    handleList(detail.name);
  };

  return (
    <Container>
      <Menu href="#" className="depth1" onClick={onClick}>
        <span>
          <FontAwesomeIcon icon={detail?.icon} />
        </span>
        {detail?.name}
      </Menu>
      <MenuDetail state={state}>
        {detail?.list?.map(l => (
          <li key={l}>
            <a href="#">{l}</a>
          </li>
        ))}
      </MenuDetail>
    </Container>
  );
}

const Container = styled.li`
  overflow: hidden;
  padding: 8px 0;
  @media screen and (min-width: 940px) {
    float: left;
    margin: 0 4px;
    padding: 0;
  }
  a {
    span {
      display: inline-block;
      text-align: center;
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      text-align: center;
      margin: 10px 15px 10px 0;
      background: red;
      border-radius: 50%;
      box-sizing: border-box;
      background: linear-gradient(0.25turn, #d061fe, #3c97f9);
      color: #fff;
      @media screen and (min-width: 940px) {
        display: none;
      }
    }
  }
`;

const Menu = styled.a`
  position: relative;
  font-size: 22px;
  line-height: 50px;
  font-weight: bold;
  @media screen and (min-width: 940px) {
    font-size: 16px;
    line-height: 80px;
    padding: 0 22px;
  }
  &::before {
    position: absolute;
    left: 45px;
    top: 30px;
    width: 80%;
    content: "";
    height: 2px;
    background: linear-gradient(0.25turn, #d061fe, #3c97f9);
    @media screen and (min-width: 940px) {
      display: none;
    }
  }
`;

const MenuDetail = styled.ul`
  padding: 6px 0 22px;
  line-height: 30px;
  display: ${props => (props.state ? "block" : "none")};
  color: #444;
  @media screen and (min-width: 940px) {
    background: #fff;
    /* border-bottom: 1px solid #ccc; */
  }
  li {
    position: relative;
    font-size: 14px;
    padding-left: 48px;
    @media screen and (min-width: 940px) {
      position: relative;
      font-size: 14px;
      padding-left: 0;
      padding: 0 11px;
    }
    &::before {
      display: block;
      position: absolute;
      top: 5px;
      left: 32px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      color: #3c97f9;
      font-family: "FontAwesome";
      font-weight: 900;
      content: "\f054";
      @media screen and (min-width: 940px) {
        display: none;
      }
    }
    a {
      @media screen and (min-width: 940px) {
        color: #444;
      }
    }
  }
`;
