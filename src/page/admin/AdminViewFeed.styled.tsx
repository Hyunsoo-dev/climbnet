import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  // height: 700px;
  overflow-y: auto;
  height: 100%;
  // height: calc(100% - 120px);
`;
export const StyledLi = styled.li`
  list-style: none;
  display: flex;
`;

export const NavigationBar = styled.div`
  width: 100%;
  height: 30px;
  display: flex;

  padding: 5px 10px;
  gap: 5px;
`;

export const AllButton = styled.button`
  display: flex;
  padding: 2px 16px;
  align-items: flex-start;
  gap: 2px;
  color: var(--gray-800, #575757);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  gap: 2px;
  border-radius: 10px;
  border: 1px solid var(--gray-800, #575757);
  background: var(--gray-400, #e1e1e1);
`;
export const SettingButton = styled.button`
  display: flex;
  padding: 2px 16px;
  align-items: flex-start;
  gap: 2px;
  color: var(--blue-500, #276ef1);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  border-radius: 10px;
  border: 1px solid var(--blue-500, #276ef1);
  background-color: white;
`;
export const FestivalButton = styled.button`
  display: flex;
  padding: 2px 16px;
  align-items: flex-start;
  color: var(--green-600, #63b87b);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  border-radius: 10px;

  border: 1px solid var(--green-600, #63b87b);
  background-color: white;
`;
