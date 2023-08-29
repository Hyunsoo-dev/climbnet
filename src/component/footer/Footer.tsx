import { Container, StyledLink, StyledButton } from "./Footer.styled";
import { useState } from "react";
// import imageTest from "../../icon_see_feed.png";
import styled from "styled-components";
import React, { SyntheticEvent } from "react";
import { Link, LinkProps } from "react-router-dom";

import { ReactComponent as IconSeeFeed } from "../../asset/iconSeeFeed.svg";
import { ReactComponent as IconSeeLocal } from "../../asset/iconSeeLocal.svg";
import { ReactComponent as IconMyInfo } from "../../asset/iconMyInfo.svg";
import { ReactComponent as IconMyArround } from "../../asset/iconMyArround.svg";
import { ReactComponent as IconSeeWeekly } from "../../asset/iconSeeWeekly.svg";
import { categoryStore } from "../../store";

// import icon from "img/icon_see_feed.svg";

const Footer = () => {
  const [clickedMenu, setClickedMenu] = useState("2");
  const setCategory = categoryStore((state) => state.setCategory);

  const onClickMenu = (event: SyntheticEvent, menuNumber: string) => {
    event.isPropagationStopped();
    console.log("event.target: ", event.currentTarget.id);
    const eventTargetId = event.currentTarget.id;

    setCategory(eventTargetId);
    setClickedMenu(menuNumber);
  };

  return (
    <Container>
      <StyledLink
        to="/weeklyView"
        id="weeklyView"
        $active={clickedMenu === "1"}
        onClick={(event: SyntheticEvent) => onClickMenu(event, "1")}
      >
        <StyledButton>
          <IconSeeWeekly className={`${clickedMenu === "1" ? "active" : ""}`} />
          <span className={`${clickedMenu === "1" ? "active" : ""}`}>
            주별보기
          </span>
        </StyledButton>
      </StyledLink>
      <StyledLink
        to="/viewFeed"
        id="viewFeed"
        $active={clickedMenu === "2"}
        onClick={(event: SyntheticEvent) => onClickMenu(event, "2")}
      >
        <StyledButton>
          <IconSeeFeed className={`${clickedMenu === "2" ? "active" : ""}`} />
          <span className={`${clickedMenu === "2" ? "active" : ""}`}>
            피드보기
          </span>
        </StyledButton>
      </StyledLink>
      <StyledLink
        to="viewRegion"
        id="viewRegion"
        $active={clickedMenu === "3"}
        onClick={(event: SyntheticEvent) => onClickMenu(event, "3")}
      >
        <StyledButton>
          <IconSeeLocal className={`${clickedMenu === "3" ? "active" : ""}`} />
          <span className={`${clickedMenu === "3" ? "active" : ""}`}>
            지역보기
          </span>
        </StyledButton>
      </StyledLink>
      <StyledLink
        to="aroundMe"
        id="aroundMe"
        $active={clickedMenu === "4"}
        onClick={(event: SyntheticEvent) => onClickMenu(event, "4")}
      >
        <StyledButton>
          <IconMyArround className={`${clickedMenu === "4" ? "active" : ""}`} />
          <span className={`${clickedMenu === "4" ? "active" : ""}`}>
            내주변
          </span>
        </StyledButton>
      </StyledLink>
      <StyledLink
        to="myInfo"
        id="myInfo"
        $active={clickedMenu === "5"}
        onClick={(event: SyntheticEvent) => onClickMenu(event, "5")}
      >
        <StyledButton>
          <IconMyInfoStyled
            className={`${clickedMenu === "5" ? "active" : ""}`}
          />
          <span className={`${clickedMenu === "5" ? "active" : ""}`}>
            내정보
          </span>
        </StyledButton>
      </StyledLink>
    </Container>
  );
};

export default Footer;

const IconMyInfoStyled = styled(IconMyInfo)``;
