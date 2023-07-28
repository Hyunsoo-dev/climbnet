import styled from "styled-components";
import { Row, Col } from "antd";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  user-select: none;
`;

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 8px;
  border: 1px solid var(--gray-300, #e8e8e8);
`;

export const StyledRow = styled(Row)`
  width: 100%;
  height: 25%;
`;

export const StyledCol = styled(Col)`
  width: 50%;
  height: 100%;
`;
