import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, Rating } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ProductCardWrapper = styled.div`
  max-width: 345px;
  text-align: center;
  margin: 0 auto;
  height: 100%;
  border: 1px solid black;
  height: 100%;
`;

const CardBody = styled.div``;

const ProductImgContainer = styled.div``;
const Card = styled.div`
  width: 295px;
  overflow: hidden;
  border-radius: 25px;
  border: 1px solid lavender;
  margin: 10px;
  &:hover {
    box-shadow: 5px 5px 15px 5px rgba(230, 230, 250, 1);
  }
  & img {
    max-width: 100%;
    border-bottom-right-radius: 30px;
    transform: rotate(10deg) translate(-15px, -55px);
    transition: all 0.3s ease-in-out;
    position: absolute;
    height: 200px;
    object-fit: cover;
    object-position: center;
  }

  &:hover {
    & img {
      transform: rotate(0deg) translate(-15px, -55px);
      transition: all 0.3s ease-in-out;
    }
  }
`;
const CardImageWrapper = styled.div`
  position: relative;
  height: 140px;
`;
const CardInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px 30px 20px 30px;
  margin-top: 20px;

  & h3 {
    font-size: 18px;
    font-weight: 700;
  }
  & p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const CardInfoPrice = styled.div`
  font-weight: 700;
  text-align: right;
  color: orangered;
`;

const CardLeftText = styled.div`
  padding-right: 10px;
`;
const ProductRating = styled.div`
  padding: 0px 30px 20px 30px;
`;

const ProductCard = ({ pizza }) => {
  return (
    <div style={{ height: "100%" }}>
      {/* <ProductCardWrapper>
        <ProductImgContainer
          style={{ backgroundImage: "url(" + pizza.img + ")", height: "200px" }}
          image={pizza.img}
          alt="green iguana"
        ></ProductImgContainer>
        <CardBody>
          <Typography gutterBottom variant="h5" component="div">
            <b>{pizza.title}</b>
          </Typography>
          <Divider
            sx={{
              width: "20%",
              margin: "0 auto",
              background: "#d1411e",
              height: "4px",
              marginBottom: "10px",
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {pizza.desc}
          </Typography>
        </CardBody>
      </ProductCardWrapper> */}
      <Link href={`/product/${pizza._id}`} passHref>
        <Card style={{ height: "100%", margin: "0 auto" }}>
          <CardImageWrapper>
            <img src={pizza.img} alt="Salad" />
          </CardImageWrapper>

          <CardInfo>
            <CardLeftText>
              <h3>{pizza.title}</h3>
              <p>{pizza.desc}</p>
            </CardLeftText>
            <CardInfoPrice>
              <p></p>
            </CardInfoPrice>
          </CardInfo>
          <ProductRating>
            <Rating name="read-only" value={5} readOnly />
          </ProductRating>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
