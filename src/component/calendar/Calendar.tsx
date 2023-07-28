import Calendar from "react-calendar";
import { SyntheticEvent, useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { Container } from "./Calendar.styled";
type ValuePiece = Date | null;
type View = "month" | "year" | "decade" | "century" | "day" | "week";
const CalendarElement = (props: any) => {
  const [value, onChange] = useState<ValuePiece | [ValuePiece, ValuePiece]>();
  const [week, setWeek] = useState<number>(0);
  const [dayOfWeek, setDayOfWeek] = useState({
    first: new Date(),
    last: new Date(),
  });
  // console.log("props.today :", props.today);
  // console.log("Calendar today :", props.today);
  useEffect(() => {
    // console.log("Calendar useEffect");
    const firstDayOfWeek = getFirstDayOfWeek(props.today);
    const lastDayOfWeek = getLastDayOfWeek(props.today);

    setDayOfWeek({
      ...dayOfWeek,
      first: firstDayOfWeek,
      last: lastDayOfWeek,
    });
    setWeek(week);
  }, [props]);

  // console.log("week :", week);
  const handleDateChange = (date: ValuePiece) => {
    onChange(date);
  };

  /**
   *  오늘 날짜를 구한다 -> new Date()
   *  오늘 날짜가 속한 주의 첫번째 날짜를 구한다 -> const firstDayOfWeek = getFirstDayOfWeek([new Date())
   *  첫번째 날짜를 이용해서 해당 주가 몇번째 주인지 구한다  -> const week = getWeek(firstDayOfWeek)
   *
   */
  const getWeek = (date: any) => {
    const currentDate = date.getDate();
    const firstDay = new Date(date.setDate(1)).getDay();

    return Math.ceil((currentDate + firstDay) / 7);
  };

  const handleWeekClick = (date: any) => {
    const week = getWeek(date);
    // console.log("week :", week);
  };

  // const getFirstDayOfWeek = (date: any) => {
  //   const day = date.getDay();
  //   const diff = date.getDate() - day + (day === 0 ? 0 : 0);
  //   const firstDayOfWeek = new Date(date.setDate(diff));

  //   return firstDayOfWeek;
  // };

  function getFirstDayOfWeek(date: any) {
    const day = date.getDay(); // 주어진 날짜의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)

    const diff = day === 0 ? 0 : -day; // 주의 첫 번째 날까지의 날짜 차이
    // console.log("eddie day :", date, day, "diff :", diff);
    const firstDayOfWeek = new Date(date); // 주어진 날짜를 기준으로 복사
    firstDayOfWeek.setDate(date.getDate() + diff); // 주의 첫 번째 날짜로 설정
    // console.log("eddie firstDayOfWeek :", firstDayOfWeek);
    return firstDayOfWeek;
  }

  function getLastDayOfWeek(date: any) {
    const day = date.getDay(); // 주어진 날짜의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
    const diff = 6 - day; // 다음 주의 마지막 날까지의 날짜 차이

    const lastDayOfWeek = new Date(date); // 주어진 날짜를 기준으로 복사
    lastDayOfWeek.setDate(date.getDate() + diff); // 다음 주의 마지막 날짜로 설정

    return lastDayOfWeek;
  }

  return (
    <Container>
      <Calendar
        className="custom-calendar"
        value={[dayOfWeek.first, dayOfWeek.last]}
        onChange={(value: any) => {
          onChange(value);
        }}
        selectRange={true}
        view="month"
        calendarType="US"
        locale="US"
        showNavigation={false}
        onClickDay={handleWeekClick}
        formatDay={(locale, date) => {
          const day = date.getDate();
          return day.toString();
        }}
      />
    </Container>
  );
};

export default CalendarElement;
