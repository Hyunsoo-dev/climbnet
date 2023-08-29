
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { StyledCarousel } from "./Carousel.styled";
import {useState, useEffect} from "react";
import { getFeedImage } from "../../api/admin";

const imageArray = ["img/testImage3.jpg", "img/testImage3.jpg", "img/testImage3.jpg"];

const CarouselComponent = ({ feedId, fileIds }: { feedId: number, fileIds: number[] }) => {

  const [data, setData] = useState<any[]>([]);
  const [imageList, setImageList] = useState<any[]>([]);
  console.log('CarouselComponent feedId :', feedId, 'fileIds :', fileIds);
  useEffect(() => {

      const response = fileIds && fileIds.map(async (fileId) => (
          await getFeedImage({feedId, fileId})
      ))

    // Promise.allSettled(response).then((result) => setData([...data, ...result]));
    Promise.allSettled(response).then((result) => {
      console.log('eddie result: ', result)
      const test = result.map((value:any) => {
        // const blob = new Blob([value.data]);
        // return URL.createObjectURL(blob);
        return value.data
      })



      console.log('test: ', test);
      setImageList([...imageList, ...test]);
      // console.log('eddie test :', test);
    });

  // console.log('getFeedImage response :', response)


  }, [])


  if (!feedId) {
    return <div>No Image</div>
  }
  if (fileIds && fileIds.length === 0) {
    return <div>No Image</div>
  }


  console.log('CarouselComponent imageList: ', imageList);

  return (
    <StyledCarousel
      showArrows={false}
      emulateTouch={true}
      // showIndicators={true}
      showThumbs={false}
      dynamicHeight={false}
    >

      {imageList.map((item, idx) => {
        return <img key={idx} src={item} />
      })}
      {/*{data.map((item, idx) => {*/}
      {/*  return <img key={idx} src={`data:image/jpeg;charset=utf-8,${atob(item.value.data)}`} />*/}
      {/*})}*/}

      {/*{imageArray.map((item, idx) => (*/}

      {/*      <img key={idx} src={item} />*/}

      {/*))}*/}

    </StyledCarousel>
  );
};

export default CarouselComponent;
