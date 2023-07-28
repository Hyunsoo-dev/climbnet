import styled from "styled-components";

export const StyledLi = styled.li`
  list-style: none;
  display: flex;
  margin: 50px 15px;
  width: 328px;
  // height: 436px;
  height: auto;
  // border-radius: 8px;
  // border: 1px solid var(--gray-500, #d9d9d9);
  // background: var(--primary, #fff);
`;

export const CardContainer = styled.section``;

export const CardFooter = styled.footer`
  height: 66px;
  font-size: 16px;
  display: flex;
  padding: 0px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const FooterTitleWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const FooterInfoWrapper = styled.section`
  color: var(--gray-900, #2b2b2b);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;
