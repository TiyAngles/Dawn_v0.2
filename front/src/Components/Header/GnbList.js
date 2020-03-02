import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GnbList({ detail, handleList, state }) {
  const onClick = () => {
    handleList(detail.name);
  };
  return (
    <Container>
      <a href="#" class="depth1" onClick={onClick}>
        <span>
          <FontAwesomeIcon icon={detail?.icon} />
        </span>
        {detail?.name}
      </a>
      <MenuDetail state={state}>
        {detail?.list?.map(l => (
          <li>
            <a href="#">{l}</a>
          </li>
        ))}
      </MenuDetail>
    </Container>
  );
}

const MenuDetail = styled.ul`
  display: ${props => (props.state ? "block" : "none")};
`;

const Container = styled.li`
  padding: 8px 0;
  a {
    position: relative;
    font-size: 22px;
    line-height: 50px;
    font-weight: bold;
    &::before {
      position: absolute;
      left: 45px;
      top: 30px;
      width: 80%;
      content: "";
      height: 2px;
      background: linear-gradient(0.25turn, #d061fe, #3c97f9);
    }
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
    }
  }
`;
