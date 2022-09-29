import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import OrderDetail from "../components/OrderDetail";
import { useRouter } from "next/router";
import axios from "axios";
import { reset } from "../redux/cartSlice";
import { Button, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import styled from "styled-components";
import { mobile } from "../responsive";

import { cartData } from "../dummyData";

const CartContainer = styled.div``;
const ProductCard = styled.div`
  display: flex;
  border: 1px solid lavender;
  border-radius: 7px;
  padding: 15px;
  margin-bottom: 15px;
  &:hover {
    box-shadow: 5px 5px 15px 5px rgba(230, 230, 250, 1);
  }
`;

const ImageContainer = styled.div``;
const ProductImage = styled.img`
  width: 100%;
`;

const ProductName = styled.div`
  font-size: 24px;
  & > h5 {
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 1.1;
  }
`;
const Extras = styled.div`
  & > span {
    font-size: 14px;
  }
  & > span::after {
    content: ", ";
  }
  & > span:last-child::after {
    content: "." !important;
  }
`;

const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
`;
const QtyAction = styled.div`
  padding: 10px;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.plus ? "#d1411e" : "#efefef")};
  margin: 10px;
  & > h6 {
    font-size: 24px;
    color: ${(props) => (props.plus ? "white" : "black")};
  }
`;
const Quantity = styled.div``;
const Plus = styled.div``;
const ActionBtn = styled.div``;
const IconContainer = styled.div``;

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const [cartArray, setCartArray] = useState([]);

  const createOrder = async (data) => {
    try {
      const res = await axios.post(
        "https://next-restaurant-101.herokuapp.com/api/orders",
        data
      );
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setCartArray(cartData);
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={9} sx={{ padding: "20px" }}>
          <Typography variant="h4">
            <b>Cart</b>{" "}
          </Typography>
          <CartContainer>
            {cartArray.map((product, i) => (
              <ProductCard key={i}>
                <Grid container sx={{ alignItems: "center" }} spacing={2}>
                  <Grid item xs={3}>
                    <ImageContainer>
                      <ProductImage src={product?.img} />
                    </ImageContainer>
                  </Grid>
                  <Grid item xs={5}>
                    <ProductName>
                      {" "}
                      <h5>{product?.title}</h5>
                    </ProductName>
                    <Extras>
                      {product.extras &&
                        product?.extras.map((extra, i) => (
                          <span key={i}>&nbsp;{extra}</span>
                        ))}
                    </Extras>
                  </Grid>
                  <Grid item xs={3}>
                    <ProductQuantity>
                      <QtyAction>
                        <RemoveIcon sx={{ color: "black" }} />
                      </QtyAction>
                      <Quantity>
                        <h5>{product?.quantity}</h5>
                      </Quantity>
                      <QtyAction plus>
                        <AddIcon sx={{ color: "white" }} />
                      </QtyAction>
                    </ProductQuantity>
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sx={{ display: "flex", justifyContent: "end" }}
                  >
                    <ActionBtn>
                      <IconContainer>
                        <DeleteIcon fontSize="large" />
                      </IconContainer>
                    </ActionBtn>
                  </Grid>
                </Grid>
              </ProductCard>
            ))}
          </CartContainer>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default Cart;
