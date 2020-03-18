import React from "react";
import styled from "styled-components";
import {
  faFacebookF,
  faGoogle,
  faGoogleDrive,
  faGithub,
  faTrello,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  margin-top: 24px;
  padding: 32px 20px 22px;
  background-color: #2e8bff;
  color: #ccc;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  color: #fff;
  @media screen and (min-width: 940px) {
    padding: 32px 20px 42px;
  }
`;

const FooterSNS = styled.div`
  float: left;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 0;

  ul {
    display: flex;
    li {
      margin-left: 1em;
    }
  }
  @media screen and (min-width: 940px) {
    width: 50%;
    text-align: right;
    font-size: 16px;
  }
`;

const FooterDescription = styled.div`
  float: left;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 0;
  color: #ccc;
  span {
    font-weight: bold;
    color: #fff;
    padding-left: 2px;
  }
  @media screen and (min-width: 940px) {
    width: 50%;
    text-align: right;
    font-size: 16px;
  }
`;
export default function FooterBottom() {
  return (
    <Container>
      <FooterSNS>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGoogle} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGoogleDrive} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTrello} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
        </ul>
      </FooterSNS>
      <FooterDescription>
        <p>
          &copy;<span>Traveler</span>. designed and Developed by tiyangle
        </p>
      </FooterDescription>
    </Container>
  );
}
