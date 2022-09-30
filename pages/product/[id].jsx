import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  desktop,
  desktopLarge,
  mobile,
  sm,
  tablet,
  xl,
} from "../../responsive";
import Product from "../../models/Product";
import { addProduct } from "../../redux/cartSlice";
const Container = styled.div``;

const ImageContainer = styled.div`
  width: 50%;
  ${mobile({ width: "40%" })}
  margin: 0 auto;
  padding-bottom: 40px;
`;
const ProductImage = styled.img``;
const ProductTitle = styled.h3`
  font-size: 35px;
  font-weight: 500;
`;
const ProductPrice = styled.span`
  font-size: 25px;
  font-weight: 400;
  color: #d1411e;
  border-bottom: 1px solid #d1411e;
`;
const ProductDesc = styled.p`
  margin: 15px 0 25px 0;
`;

const Sizes = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "60%" })}
  ${tablet({ width: "50%" })}
  ${desktop({ width: "40%" })}
  ${desktopLarge({ width: "30%" })}
  ${xl({ width: "20%" })}
  padding: 10px;
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
const Ingredients = styled.div`
  display: flex;
  margin-bottom: 30px;
  ${mobile({ flexDirection: "column" })}
  flex-direction: row;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const InputCheckbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #d1411e;
  margin-right: 5px;
`;

const AddBtnRow = styled.div``;

const Quantity = styled.input`
  height: 40px;
  padding: 7px 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  background-color: #d1411e;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  border-radius: 7px;
  height: 40px;
  padding: 7px 20px;
`;

const SingleProduct = ({ product }) => {
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

  const handleQuantity = (quantity) => {
    setQuantity(parseInt(quantity));
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, extras, price, quantity }));
  };
  return (
    <Container>
      <Grid container sx={{ padding: "40px 15px" }}>
        <Grid item xs={12} md={6} lg={6}>
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
        <Grid item xs={12} md={6} lg={6}>
          <div>
            <ProductTitle>{product?.title}</ProductTitle>
            <ProductPrice>GH¢ {price}</ProductPrice>
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
          <Typography variant="h6" sx={{ marginBottom: "10px;" }}>
            Choose additional ingredients
          </Typography>
          <Ingredients>
            {product.extraOptions.map((option) => (
              <Option key={option._id}>
                <InputCheckbox
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor="double">{option.text}</label>
              </Option>
            ))}
          </Ingredients>
          <AddBtnRow>
            <Quantity
              type="number"
              onChange={(e) => handleQuantity(e.target.value)}
              defaultValue={1}
            />
            <Button onClick={handleClick}>Add to Cart</Button>
          </AddBtnRow>
        </Grid>
      </Grid>
    </Container>
  );
};

export const getServerSideProps = async ({ params }) => {
  // const res = await axios.get(
  //   `https://ready-chow.onrender.com/api/products/${params.id}`
  // );
  const productQuery = await Product.findById(params.id);
  const product = JSON.stringify(productQuery);

  return {
    props: {
      product: JSON.parse(product),
    },
  };
};

export default SingleProduct;
