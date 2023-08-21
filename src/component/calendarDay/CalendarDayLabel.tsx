import { ReactComponent as IconBlueLabel } from "../../asset/label/blue_label.svg";
import { ReactComponent as IconGreenLabel } from "../../asset/label/green_label.svg";
import {
  Container,
  ItemWrapper,
  StyledBlueLabel,
  StyledGreenLabel,
  ItemType,
  Item,
} from "./CalendarDayLabel.styled";

interface ListItemProps {
  type: string;
  content: string;
}

interface CalendarDayLabelProps {
  list?: ListItemProps[];
}

const CalendarDayLabel = ({ list }: CalendarDayLabelProps) => {
  // console.log("list :", list);
  return (
    <>
      {list?.map((item, idx) =>
        item.type === "setting" ? (
          <ItemWrapper>
            <IconBlueLabel />
            <ItemType>행사</ItemType>
            {item.content}
          </ItemWrapper>
        ) : (
          <ItemWrapper>
            <IconGreenLabel />
            <ItemType>세팅</ItemType>
            <Item>{item.content}</Item>
          </ItemWrapper>
        )
      )}
      {/* {list === "setting" ? (
        <ItemWrapper>
          <IconBlueLabel />
          <ItemType>행사</ItemType>
          {content}
        </ItemWrapper>
      ) : (
        <ItemWrapper>
          <IconGreenLabel />
          <ItemType>세팅</ItemType>
          <Item>{content}</Item>
        </ItemWrapper>
      )} */}
    </>
  );
};

export default CalendarDayLabel;
