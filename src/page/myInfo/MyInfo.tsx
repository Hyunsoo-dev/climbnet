import { Container } from "./MyInfo.styled";
import { Image} from "antd";
import { ReactComponent as NotFoundComponent } from "../../asset/notFoundFinal.svg";

const MyInfo = () => {
  return (
    <Container>
      {/*<NotFoundComponent />*/}

        <Image src="img/notFound.png" />
    </Container>
  );
};

export default MyInfo;
