import styled from "styled-components";

export const Container = styled.section`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 3px;
  padding: 8px;

  .custom-calendar {
    width: 100%;
    height: 95%;
    font-size: 3px;
    border: none;
    overflow: hidden;
    .react-calendar__viewContainer {
      height: 95%;

      .react-calendar__month-view {
        height: 95%;

        .react-calendar__month-view:first-child {
          height: 95%;
        }
      }
    }

    .react-calendar__month-view__weekdays {
      height: 20px;
      line-height: normal;
    }

    .react-calendar__tile {
      padding: 5px;
      font-size: 1px;
    }
  }
`;
