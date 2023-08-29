import { Container } from "./Around.styled";
import { ReactComponent as NotFoundComponent } from "../../asset/notFound.svg";
import {Image} from "antd";
const AroundMe = () => {
  return (
    <Container>
      {/*<NotFoundComponent />*/}
        <Image src="img/notFound.png" />
    </Container>
  );
};

export default AroundMe;
