import { Container } from "./ViewRegion.styled";
import { Image } from "antd";
import { ReactComponent as NotFoundComponent } from "../../asset/notFound.svg";
const ViewRegion = () => {
  return (
    <Container>
      <NotFoundComponent />
    </Container>
  );
};

export default ViewRegion;
