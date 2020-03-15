import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SerachBox() {
  const [showInput, setShowInput] = useState(false);
  const toggleInput = () => {
    setShowInput(!showInput);
  };
  return (
    <Container onClick={toggleInput}>
      <a>
        <span className="">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </a>
      <SearchInput showInput={showInput} />
    </Container>
  );
}

const Container = styled.div`
  /* height:100%; */
  position: absolute;
  right: 60px;
  cursor: pointer;
  a {
    height: 60px;
    @media screen and (min-width: 940px) {
      position: absolute;
      right: 0;
      height: 80px;
    }
    span {
      display: block;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      color: #3c97f9;
      @media screen and (min-width: 940px) {
        height: 80px;
        line-height: 80px;
      }
    }
  }
  label {
    position: absolute;
    top: 0;
    right: 0;
    background: #ccc;
    span {
      display: block;
      width: 80px;
      height: 80px;
      padding: 10px;
      text-align: center;
      line-height: 60px;
      font-size: 22px;
    }
  }
  @media screen and (min-width: 940px) {
    height: 100%;
    right: 500px;
  }
`;
