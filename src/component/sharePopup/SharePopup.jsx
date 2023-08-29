import React, { useEffect } from "react";
// import { ShareKakao } from "../../utils/shareKakaoLink";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  ModalContainer,
  DialogBox,
  BackDropBox,
  KakaoShareButton,
  KakaoIcon,
  StyledCloseCircleFilled,
  DialogBoxTitle,
  URLShareButton
} from "./SharePopup.styled";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { useScript } from "../../customHook/useScript";

const SharePopup = ({ onClickBackDrop, handleKakaoButton }) => {
  const currentUrl = "http://localhost:3000";
  return (
    <ModalContainer>
      <DialogBox>
        <DialogBoxTitle
          style={{
            width: "100%",
            height: "40px",
            borderBottom: "1px solid lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          공유하기
        </DialogBoxTitle>
          <CopyToClipboard text={currentUrl}>
              <URLShareButton>URL</URLShareButton>
          </CopyToClipboard>
        {/*<StyledCloseCircleFilled onClick={onClickBackDrop} />*/}
        {/*<div*/}
        {/*  style={{*/}
        {/*    display: "flex",*/}
        {/*    gap: "30px",*/}
        {/*    width: "100%",*/}
        {/*    height: "100%",*/}
        {/*    alignItems: "center",*/}
        {/*    justifyContent: "center",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <FacebookShareButton url={currentUrl}>*/}
        {/*    <FacebookIcon*/}
        {/*      size={48}*/}
        {/*      round={true}*/}
        {/*      borderRadius={24}*/}
        {/*    ></FacebookIcon>*/}
        {/*  </FacebookShareButton>*/}
        {/*  <TwitterShareButton url={currentUrl}>*/}
        {/*    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>*/}
        {/*  </TwitterShareButton>*/}
        {/*  <KakaoShareButton onClick={handleKakaoButton}>*/}
        {/*    <KakaoIcon src={"img/kakaoButton.png"} />*/}
        {/*  </KakaoShareButton>*/}
        {/*</div>*/}
      </DialogBox>

      <BackDropBox onClick={onClickBackDrop}></BackDropBox>
    </ModalContainer>
  );
};

export default SharePopup;
