import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./component";
import styled from "styled-components";
import { WeeklyView, ViewFeed, ViewRegion, MyInfo, AroundMe } from "./page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useScript } from "./customHook/useScript";
import { useEffect } from "react";
const queryClient = new QueryClient();

function App() {
  console.log("app");
  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("b08c696edd7fa65978ac9db70bf3d2e3");
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    // window.Kakao.Link.sendScrap({
    //   requestUrl: "http://localhost:3000",
    // });
    window.Kakao.Link.sendScrap({
      // objectType: "feed",
      requestUrl: "http://localhost:3000",
      templateId: 96167,
    });
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        {/*<BrowserRouter basename={"https://hyunsoo-dev.github.io/climbnet"}>*/}
          <BrowserRouter>
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/" element={<WeeklyView />} />
              <Route path="/weeklyView" element={<WeeklyView />} />
              <Route
                path="/viewFeed"
                element={<ViewFeed handleKakaoButton={handleKakaoButton} />}
              />
              <Route path="/viewRegion" element={<ViewRegion />} />
              <Route path="/myInfo" element={<MyInfo />} />
              <Route path="/aroundMe" element={<AroundMe />} />
            </Routes>
          </Wrapper>
          <Footer />
        </BrowserRouter>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.main`
  padding-top: 60px;
  padding-bottom: 60px;
  height: calc(100% - 123px);
  width: 100%;
`;
