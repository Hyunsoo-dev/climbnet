import { SyntheticEvent, useEffect, useState, useRef } from "react";
import { CalendarElement, CalendarDay } from "../../component";
import { Col, Row, Slider } from "antd";
import { Container, Wrapper, StyledRow, StyledCol } from "./WeeklyView.styled";

const WeeklyView = () => {
  const [selectedWeekNumber, setSelectedWeekNumber] = useState<number>(2);
  const isMouseDownRef = useRef<boolean>();
  const changeWeekRef = useRef<boolean>(false);
  const diffXRef = useRef<number>(0);

  const [startCoordination, setStartCoordination] = useState({ x: 0, y: 0 });
  const [endCoordination, setEndCoordination] = useState({ x: 0, y: 0 });
  const [today, setToday] = useState<Date>(new Date());

  useEffect(() => {
    setSelectedWeekNumber(2);
  }, []);

  const handleMouseDown = (event: any) => {
    isMouseDownRef.current = true;
    setStartCoordination({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });
  };

  const handleMouseMove = (event: any) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const diffX = offsetX - startCoordination.x;
    diffXRef.current = offsetX - startCoordination.x;

  };

  const handleMouseUp = (event: any) => {
    isMouseDownRef.current = false;
    changeWeekRef.current = false;
    setEndCoordination({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });

    const currentDate = today.getDate();
    const diff = 7;
    if (diffXRef.current < -15) {
      setSelectedWeekNumber(selectedWeekNumber + 1);
      today.setDate(currentDate + diff);
      setToday(today);
    }

    if (diffXRef.current > 15) {
      setSelectedWeekNumber(selectedWeekNumber - 1);
      today.setDate(currentDate - diff);
      setToday(today);
    }

  };

  const getDayOfWeek = (count: any): string => {
    // 요일 알려주는 함수
    const daysOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];
    // const date: Date = new Date(`${year}-${month}-${day}`);
    const date = today;
    const day = date.getDay();
    const diff = day === 0 ? 0 : -day;
    const dayOfWeekIndex: number = date.getDay() + count + diff;

    // 2 -> 화요일
    //

    return daysOfWeek[dayOfWeekIndex];
  };


  function getFirstDayOfWeek(date: any, count: any) {
    const day = date.getDay(); // 주어진 날짜의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)

    const diff = day === 0 ? 0 : -day; // 주의 첫 번째 날까지의 날짜 차이

    const firstDayOfWeek = new Date(date); // 주어진 날짜를 기준으로 복사
    firstDayOfWeek.setDate(date.getDate() + diff + count); // 주의 첫 번째 날짜로 설정

    return firstDayOfWeek;
  }

  // console.log("isMouseDownRef.current :", isMouseDownRef.current);
  const type = "setting";
  const content = "더클라임 양재";
  const mockData = [
    {
      date: 17,
      list: [
        { type: "setting", content: "더클라임 양재" },
        { type: "festival", content: "클라이밍 파크 종로" },
        { type: "festival", content: "서울 볼더스" },
      ],
    },
    {
      date: 18,
      list: [
        { type: "setting", content: "더클라임 양재" },
        { type: "festival", content: "클라이밍 파크 종로" },
        { type: "festival", content: "서울 볼더스" },
      ],
    },
    {
      date: 19,
      list: [
        { type: "setting", content: "더클라임 양재" },
        { type: "festival", content: "클라이밍 파크 종로" },
        { type: "festival", content: "서울 볼더스" },
      ],
    },
    {
      date: 20,
      list: [
        { type: "festival", content: "더클라임 양재" },
        { type: "setting", content: "클라이밍 파크 종로" },
        { type: "festival", content: "서울 볼더스" },
      ],
    },
    {
      date: 21,
      list: [
        { type: "setting", content: "더클라임 양재" },
        { type: "festival", content: "클라이밍 파크 종로" },
        { type: "setting", content: "서울 볼더스" },
      ],
    },
    {
      date: 22,
      list: [
        { type: "setting", content: "더클라임 양재" },
        { type: "festival", content: "클라이밍 파크 종로" },
        { type: "festival", content: "서울 볼더스" },
      ],
    },
    {
      date: 23,
      list: [
        { type: "setting", content: "더클라임 양재" },
        { type: "festival", content: "클라이밍 파크 종로" },
        { type: "setting", content: "서울 볼더스" },
      ],
    },
  ];
  return (
    <Container
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <StyledRow>
        <StyledCol>
          <CalendarElement today={today} />
        </StyledCol>

        <StyledCol>
          <CalendarDay
            date={getFirstDayOfWeek(today, 0).getDate().toString()}
            day={getDayOfWeek(0)}
            list={mockData[0].list}
          />
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol>
          <CalendarDay
            date={getFirstDayOfWeek(today, 1).getDate().toString()}
            day={getDayOfWeek(1)}
            list={mockData[1].list}
          />
        </StyledCol>
        <StyledCol>
          <CalendarDay
            date={getFirstDayOfWeek(today, 2).getDate().toString()}
            day={getDayOfWeek(2)}
            list={mockData[2].list}
          />
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol>
          <CalendarDay
            date={getFirstDayOfWeek(today, 3).getDate().toString()}
            day={getDayOfWeek(3)}
            list={mockData[3].list}
          />
        </StyledCol>
        <StyledCol>
          <CalendarDay
            date={getFirstDayOfWeek(today, 4).getDate().toString()}
            day={getDayOfWeek(4)}
            list={mockData[4].list}
          />
        </StyledCol>
      </StyledRow>
      <StyledRow>
        <StyledCol>
          <CalendarDay
            date={getFirstDayOfWeek(today, 5).getDate().toString()}
            day={getDayOfWeek(5)}
            list={mockData[5].list}
          />
        </StyledCol>
        <StyledCol>
          <CalendarDay
            date={getFirstDayOfWeek(today, 6).getDate().toString()}
            day={getDayOfWeek(6)}
            list={mockData[6].list}
          />
        </StyledCol>
      </StyledRow>
    </Container>
  );
};

export default WeeklyView;
