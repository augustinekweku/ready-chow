import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  background: #d1411e;
  padding: 50px 0;
`;

const Featured = () => {
  return (
    <Container>
      <Carousel showArrows={true} showStatus={false} showThumbs={false}>
        <div style={{ height: "550px" }}>
          <Image alt="" src="/img/pizza1.png" height="500" width="500" />
          <p className="legend">Legend 1</p>
        </div>
        <div style={{ height: "450px" }}>
          <Image alt="" src="/img/pizza2.png" height="500" width="500" />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    </Container>
  );
};

export default Featured;
