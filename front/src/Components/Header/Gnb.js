import React, { useState } from "react";
import styled from "styled-components";
import GnbList from "./GnbList";
import {
  faThLarge,
  faSnowflake,
  faCompass
} from "@fortawesome/free-solid-svg-icons";

const THEME = "THEME";
const AREA = "AREA";
const SEASON = "SEASON";

const theme = {
  name: THEME,
  icon: faThLarge,
  list: ["기차여행", "맛집탐방", "축제", "액티비티", "데이트"]
};

const area = {
  name: AREA,
  icon: faSnowflake,
  list: ["서울/경기", "강원도", "충청도", "경상도", "전라도", "제주도", "독도"]
};

const season = {
  name: SEASON,
  icon: faCompass,
  list: ["산뜻한봄", "시원한여름", "맛있는가을", "따뜻한겨울"]
};

export default function Gnb() {
  const [listState, setListState] = useState({
    theme: false,
    area: false,
    season: false
  });
  const handleList = name => {
    switch (name) {
      case THEME:
        setListState({ ...listState, theme: !listState.theme });
        break;
      case AREA:
        setListState({ ...listState, area: !listState.area });
        break;
      case SEASON:
        setListState({ ...listState, season: !listState.season });
        break;
      default:
        setListState({ ...listState });
        break;
    }
  };
  return (
    <Container listState={listState}>
      <GnbInner>
        <GnbList
          detail={theme}
          handleList={handleList}
          state={listState.theme}
        />
        <GnbList detail={area} handleList={handleList} state={listState.area} />
        <GnbList
          detail={season}
          handleList={handleList}
          state={listState.season}
        />
      </GnbInner>
    </Container>
  );
}

const Container = styled.div`
  top: 0;
  padding: 40px 20px 0 20px;
  @media screen and (min-width: 940px) {
    float: left;
    top: auto;
    padding: 0;
  }
`;

const GnbInner = styled.ul`
  &::after {
    @media screen and (min-width: 940px) {
      display: block;
      content: "";
      clear: both;
    }
  }
`;
