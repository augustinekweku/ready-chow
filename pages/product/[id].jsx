import { Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
const Container = styled.div``;

const ImageContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;
const ProductImage = styled.img``;
const ProductTitle = styled.h3`
  font-size: 35px;
  font-weight: 400;
`;
const ProductPrice = styled.h4`
  font-size: 30px;
  font-weight: 400;
  color: #d1411e;
  text-decoration: underline;
`;
const ProductDesc = styled.p`
  margin-bottom: 25px;
`;

const Sizes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  padding-top: 10px;
`;
const Size = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;

  &:nth-child(2) {
    width: 40px;
    height: 40px;
  }

  &:last-child {
    width: 50px;
    height: 50px;
  }
`;

const Number = styled.span`
  position: absolute;
  top: -5px;
  right: -20px;
  background-color: teal;
  color: white;
  font-size: 12px;
  padding: 0 5px;
  border-radius: 10px;
`;

const SizeImage = styled.img`
  height: 100%;
  width: 100%;
`;

const Product = ({ product }) => {
  const [price, setPrice] = useState(product?.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, extras, price, quantity }));
  };
  return (
    <Container>
      <Grid container sx={{ padding: "40px 0" }}>
        <Grid item xs={12} lg={6}>
          <ImageContainer>
            <ProductImage
              src={product?.img}
              objectFit="contain"
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </ImageContainer>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div>
            <ProductTitle>{product?.title}</ProductTitle>
            <ProductPrice>{price}</ProductPrice>
            <ProductDesc>{product?.desc}</ProductDesc>
            <Typography variant="h6">Choose the size</Typography>
          </div>
          <Sizes>
            <Size onClick={() => handleSize(0)}>
              <SizeImage src="/img/size.png" alt="" />
              <Number>Small</Number>
            </Size>
            <Size onClick={() => handleSize(1)}>
              <SizeImage src="/img/size.png" alt="" />
              <Number>Medium</Number>
            </Size>
            <Size onClick={() => handleSize(2)}>
              <SizeImage src="/img/size.png" alt="" />
              <Number>Large</Number>
            </Size>
          </Sizes>
        </Grid>
      </Grid>
    </Container>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

export default Product;
