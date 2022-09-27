import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styled from "styled-components";
import { sm } from "../../responsive";

const Container = styled.div`
  background: #d1411e;
  padding: 50px 0;
`;
const ImageContainer = styled.div`
  ${sm({ width: "100%", padding: "0 24px" })}
`;

const Featured = () => {
  return (
    <Container>
      <Carousel showArrows={true} showStatus={false} showThumbs={false}>
        <div style={{ height: "400px" }}>
          <ImageContainer>
            <Image alt="" src="/img/pizza2.png" height="350" width="350" />
          </ImageContainer>
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    </Container>
  );
};

export default Featured;
