import { Container } from "./ViewRegion.styled";
import { Image } from "antd";
import { ReactComponent as NotFoundComponent } from "../../asset/notFound.svg";
const ViewRegion = () => {
  return (
    <Container>
      {/*<NotFoundComponent />*/}
        <Image src="img/notFound.png" />
    </Container>
  );
};

export default ViewRegion;
