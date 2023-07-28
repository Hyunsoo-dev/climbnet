import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  height: 60px;
  width: 100%;
  // background-color: #276ef1;
  z-index: 1;
  border-bottom: 1px solid var(--gray-300, #e8e8e8);
  display: flex;
  align-items: center;
  padding-left: 16px;
  gap: 16px;
`;

export const PageTitle = styled.div`
  color: var(--gray-900, #2b2b2b);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 80% */
  letter-spacing: 0.4px;
`;
