import { useRef, useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  StyledLi,
  CardContainer,
  CardFooter,
  FooterTitleWrapper,
  FooterInfoWrapper,
} from "./AdminViewFeedCard.styled";
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

interface ClimingGroundInfoProps {
  feedId: number;
  placeName?: string;
  placeBranch?: string;
  fileIds: number[];
  eventType?: string;
  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;

}

const AdminViewFeedCard = ({
  item,
  setIsOpenSharePopup,
  handleKakaoButton,
}: {
  item: ClimingGroundInfoProps;
  setIsOpenSharePopup?: Dispatch<SetStateAction<boolean>>;
  handleKakaoButton: any;
}) => {
  const cardRef = useRef<HTMLLIElement>(null);
  // const [feedId, setFeedId] = useState<number>(0);
  // const [fileIds, setFileIds] = useState<number[]>([]);

  console.log('AdminViewFeedCard item: ', item);
  useEffect(() => {
    console.log("admin view feed card useEffect: ", "feedId: ", item.feedId, "fileId: ", item.fileIds);
    // setFeedId(item.feedId);
    // setFileIds([...fileIds, ...item.fileIds]);
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
          {item.eventType === "S" && (
              <SettingIcon
                  style={{ position: "absolute", zIndex: 1, bottom: 10, left: 10 }}
              />
          )}



          {/*<ShareIcon*/}
          {/*  style={{*/}
          {/*    position: "absolute",*/}
          {/*    zIndex: 1,*/}
          {/*    top: 10,*/}
          {/*    right: 10,*/}
          {/*    cursor: "pointer",*/}
          {/*  }}*/}
          {/*  onClick={setIsOpenSharePopup}*/}
          {/*/>*/}
          <CarouselComponent feedId={item.feedId} fileIds={item.fileIds}/>
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
            <span>{item.placeName}</span>
          </FooterTitleWrapper>
          <FooterInfoWrapper>
            <div>
              <span>일시:</span>
              <span>{`${item.startDate}`} ~ ${item.endDate}</span>
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

export default AdminViewFeedCard;
