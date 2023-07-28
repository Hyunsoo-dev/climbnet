import styled from "styled-components";
import { Link } from "react-router-dom";

interface StyledLinkProps {
  $active: boolean;
}

export const Container = styled.section`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;

  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background: #fff;
  border-top: 3px solid var(--gray-300, #e8e8e8);
  // padding-top: 4px;
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  width: 100%;
  height: 100%;
  text-decoration: none;

  border-top: ${(props) =>
    props.$active ? "4px solid #276EF1" : "4px solid #fff"};
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  border: none;
  color: black;
  stroke: black;
  .active {
    color: #276ef1;
    stroke: #276ef1;
    fill: #276ef1;
  }
`;
