import styled from "styled-components";
import { CloseCircleOutlined, CloseCircleFilled } from "@ant-design/icons";
export const ModalContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 3;
`;

export const DialogBox = styled.section`
  position: relative;
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  border-top: 2px solid lightgray;
  //   padding: 15px;
`;

export const BackDropBox = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const DialogBoxTitle = styled.section`
  color: var(--gray-900, #2b2b2b);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 80% */
  letter-spacing: 0.4px;
`;

export const KakaoShareButton = styled.a`
  cursor: pointer;
`;

export const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const StyledCloseCircleFilled = styled(CloseCircleFilled)`
  position: absolute;
  right: 3px;
  top: 0px;
  font-size: 30px;
`;
