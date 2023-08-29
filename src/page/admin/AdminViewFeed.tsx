import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Container,
  StyledLi,
  AllButton,
  SettingButton,
  FestivalButton,
  NavigationBar,
} from "./AdminViewFeed.styled";
import { newsList } from "../../asset/newsList";
import { Image } from "antd";
import AdminViewFeedCard from "./AdminViewFeedCard";
import { requestPost, requestFilterPost } from "../../api/mockData";
import { getFeed } from "../../api/admin";
import { useInfiniteQuery, QueryFunctionContext } from "react-query";
import InfiniteScroll from "react-infinite-scroller";
import { LoadingOutlined } from "@ant-design/icons";
import { SharePopup } from "../../component/index";
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
  image: string;
  price: number;
  title: string;
  rating: {
    count: number;
    rate: number;
  };
}

let testId = 1;
const AdminViewFeed = ({ handleKakaoButton }: { handleKakaoButton?: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpenSharePopup, setIsOpenSharePopup] = useState(false);

  const onClickBackDrop = (event?: React.MouseEvent) => {
    event && event.preventDefault();
    if (isOpenSharePopup) {
      setIsOpenSharePopup(false);
    }
  };
  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ["mockData"],
      ({ pageParam = 0 }: QueryFunctionContext) => getFeed(pageParam),
      {
        getNextPageParam: (pageParam, allPosts) => {

            return pageParam.data.last
          // return pageParam.data.page !== 12
          //   ? pageParam.data.page + 1
          //   : undefined;
        },
      }
    );

    console.log('AdminViewFeed data: ', data);

  if (isLoading) return <></>;

  return (
    <Container ref={containerRef}>
      {isOpenSharePopup ? (
        <SharePopup
          onClickBackDrop={onClickBackDrop}
          handleKakaoButton={handleKakaoButton}
        />
      ) : (
        <></>
      )}
      <NavigationBar>
        {/* <AllButton>전체</AllButton>
        <SettingButton>세팅</SettingButton>
        <FestivalButton>행사</FestivalButton> */}
      </NavigationBar>
      <InfiniteScroll
        hasMore={hasNextPage}
        loadMore={() => {
          console.log("loadmore");
          // setTimeout(() => fetchNextPage(), 1500);
          fetchNextPage();
        }}
        threshold={70}
        loader={
          <LoadingOutlined
            className="loader"
            style={{
              fontSize: "15px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={0}
          ></LoadingOutlined>
        }
        useWindow={false}
      >

        {data?.pages &&
          data?.pages.map((item) =>
              item.data.content && item.data.content.map((element: any, idx: number) => {
              return (
                <AdminViewFeedCard
                  key={idx}
                  item={element}
                  setIsOpenSharePopup={setIsOpenSharePopup}
                  handleKakaoButton={handleKakaoButton}
                />
              );
            })
          )}
      </InfiniteScroll>
    </Container>
  );
};

export default AdminViewFeed;
