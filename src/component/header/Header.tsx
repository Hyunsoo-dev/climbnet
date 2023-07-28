import { Container, PageTitle } from "./Header.styled";
import { ReactComponent as Logo } from "../../asset/logo/climbnet_logo.svg";
import { categoryStore } from "../../store";

enum CategoryName {
  WEEKLY_VIEW = "주별보기",
  VIEW_FEED = "피드보기",
  VIEW_REGION = "지역보기",
  MY_INFO = "내주변",
  ARROUND_ME = "내정보",
}
const Header = () => {
  const category = categoryStore((state) => state.category);
  console.log("category :", category);
  let parsedCategory = "";
  switch (category) {
    case "weeklyView":
      parsedCategory = CategoryName.WEEKLY_VIEW;
      break;
    case "viewFeed":
      parsedCategory = CategoryName.VIEW_FEED;
      break;
    case "viewRegion":
      parsedCategory = CategoryName.VIEW_REGION;
      break;
    case "arroundMe":
      parsedCategory = CategoryName.MY_INFO;
      break;
    case "myInfo":
      parsedCategory = CategoryName.ARROUND_ME;
      break;
  }
  // 주별보기
  // 피드보기
  // 지역보기
  // 내주변
  // 내정보

  return (
    <Container>
      <Logo />
      <PageTitle>{parsedCategory}</PageTitle>
    </Container>
  );
};

export default Header;
