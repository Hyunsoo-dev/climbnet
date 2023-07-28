import styled from "styled-components";
import { ReactComponent as IconBlueLabel } from "../../asset/label/blue_label.svg";
import { ReactComponent as IconGreenLabel } from "../../asset/label/green_label.svg";

export const Container = styled.section``;

export const ItemWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 16px;

  margin: 6px 0;
`;

export const StyledBlueLabel = styled(IconBlueLabel)``;

export const StyledGreenLabel = styled(IconGreenLabel)``;
export const ItemType = styled.div`
  color: var(--gray-700, #828282);
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  letter-spacing: 0.4px;
  color: #828282;
  margin: 0 4px;
`;
export const Item = styled.div`
  color: var(--gray-900, #2b2b2b);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  color: #2b2b2b;
`;
