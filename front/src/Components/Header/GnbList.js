import React from "react";
import styled from "styled-components";
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

const MenuDetail = styled.ul`
  padding: 6px 0 22px;
  transition: all 1s ease;
  display: ${props => (props.state ? "block" : "none")};
  li {
    position: relative;
    padding-left: 48px;
    a {
      line-height: 30px;
      font-size: 14px;
      // gnb .open-menu font styles here
    }
  }
`;

const Container = styled.li`
  padding: 8px 0;
  a {
    position: relative;
    font-size: 22px;
    line-height: 50px;
    font-weight: bold;
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

const Menu = styled.a`
  &::before {
    position: absolute;
    left: 45px;
    top: 30px;
    width: 80%;
    content: "";
    height: 2px;
    background: linear-gradient(0.25turn, #d061fe, #3c97f9);
  }
`;

// const MenuDetail = styled.ul`
//   transition: display 0.2s;
//   display: ${props => (props.state ? "block" : "none")}; //animation
//   padding: 6px 0 22px;
//   li {
//     a {
//       position: relative;
//       font-size: 14px;
//       padding-left: 48px;
//       color: #3c97f9;
//       line-height: 30px;
//       &::before {
//         display: block;
//         position: absolute;
//         top: 5px;
//         left: 32px;
//         width: 20px;
//         height: 20px;
//         line-height: 20px;
//         color: #3c97f9;
//         font-family: "FontAwesome"; // font change
//         font-weight: 900;
//         content: "\f054";
//       }
//     }
//   }
// `;

// const Container = styled.li`
//   padding: 8px 0;
// `;

// const Menu = styled.a`
//   position: relative;
//   font-size: 22px;
//   line-height: 50px;
//   font-weight: bold;
//   &::before {
//     position: absolute;
//     left: 45px;
//     top: 30px;
//     width: 80%;
//     content: "";
//     height: 2px;
//     background: linear-gradient(0.25turn, #d061fe, #3c97f9);
//   }
//   span {
//     display: inline-block;
//     text-align: center;
//     width: 30px;
//     height: 30px;
//     line-height: 30px;
//     font-size: 16px;
//     text-align: center;
//     margin: 10px 15px 10px 0;
//     background: red;
//     border-radius: 50%;
//     box-sizing: border-box;
//     background: linear-gradient(0.25turn, #d061fe, #3c97f9);
//     color: #fff;
//   }
// `;
