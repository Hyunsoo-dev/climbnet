import { Container, DayItem } from "./CalendarDay.styled";
import { CalendarDayLabel } from "../../component/index";

// import { CalendarList } from "../../asset/newsList";
enum Day {
  SUNDAY = "일",
  MONDAY = "월",
  TUESDAY = "화",
  WEDNESDAY = "수",
  THURSDAY = "목",
  FRIDAY = "금",
  SATURDAY = "토",
}

interface ListItemProps {
  type: string;
  content: string;
}

interface CalendarDayProps {
  date?: string;
  day?: string;
  list?: ListItemProps[];
}

const CalendarDay = ({ date, day, list }: CalendarDayProps) => {
  return (
    <Container id="reactCalendarElement">
      <DayItem style={{ color: day === Day.SUNDAY ? "red" : "black" }}>
        {day}. {date}
      </DayItem>
      <div>
        <CalendarDayLabel list={list} />
      </div>
    </Container>
  );
};

export default CalendarDay;
