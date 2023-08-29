import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  StyledLi,
  CardContainer,
  CardFooter,
  FooterTitleWrapper,
  FooterInfoWrapper,
} from "./ViewFeedCard.styled";
import { Image } from "antd";
import { CarouselComponent } from "../../component";
import { ReactComponent as IconBlueLabel } from "../../asset/label/blue_label.svg";
import { ReactComponent as IconGreenLabel } from "../../asset/label/green_label.svg";
import { ReactComponent as SettingIcon } from "../../asset/settingIcon.svg";
import { ReactComponent as FestivalIcon } from "../../asset/festivalIcon.svg";
import { ReactComponent as ShareIcon } from "../../asset/icon-share.svg";
// import { CopyToClipboard } from "react-copy-to-clipboard";
interface NewsList {
  id?: number;
  type?: string;
  where?: string;
  image?: string;
  remove?: string;
  setting?: string;
}

interface MockDataProps {
  id: number;
  category: string;
  description: string;
  image: string[];
  price: number;
  title: string;
  rating: {
    count: number;
    rate: number;
  };
}

const ViewFeedCard = ({
  item,
  setIsOpenSharePopup,
  handleKakaoButton,
}: {
  item: MockDataProps;
  setIsOpenSharePopup?: Dispatch<SetStateAction<boolean>>;
  handleKakaoButton: any;
}) => {
  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    // console.log("view feed card useEffect");
  }, []);

  const openSharePopup = () => {};

  // if (cardRef.current) {
  //   observer?.observe(cardRef.current);
  // }

  return (
    <StyledLi ref={cardRef}>
      <CardContainer>
        {/* <CardHeader>
          <HeaderProfile></HeaderProfile>

          <HeaderWhereWrapper>암장 지점</HeaderWhereWrapper>
          <HeaderLabel>라벨라벨</HeaderLabel>
        </CardHeader> */}
        <div
          style={{
            marginBottom: "10px",
            position: "relative",
            overflow: "auto",
            width: "328px",
            height: "328px",
          }}
        >
          <SettingIcon
            style={{ position: "absolute", zIndex: 1, bottom: 10, left: 10 }}
          />

          <ShareIcon
            style={{
              position: "absolute",
              zIndex: 1,
              top: 10,
              right: 10,
              cursor: "pointer",
            }}
            onClick={setIsOpenSharePopup}
          />
          <CarouselComponent feedId={24} fileIds={[22]} />
          {/* <Image
            width={"312px"}
            height={"312px"}
            style={{ backgroundColor: "black", objectFit: "scale-down" }}
            data-src={item.image}
            src={item.image}
          /> */}
        </div>
        <CardFooter>
          <FooterTitleWrapper>
            <span>
              <IconBlueLabel />
            </span>
            <span>암장 지점명 16px</span>
          </FooterTitleWrapper>
          <FooterInfoWrapper>
            <div>
              <span>일시:</span>
              <span>YYYY.MM.DD(화) ~ YYYY.MM.DD(수)</span>
            </div>
            <div>
              <span>대상:</span>
              <span>MILKY WAY,ARHI</span>
            </div>
          </FooterInfoWrapper>
        </CardFooter>
      </CardContainer>
    </StyledLi>
  );
};

export default ViewFeedCard;
