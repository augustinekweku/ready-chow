import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  margin: 0 auto;
`;

const Heading = styled.h4`
  font-size: 28px;
  text-align: center;
  letter-spacing: 0.01em;
  margin-bottom: 10px;
`;
const SubHeading = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const ProductList = ({ productList }) => {
  return (
    <Container>
      <div>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xs={10}>
            <Heading>THE BEST PIZZA IN TOWN</Heading>
            <SubHeading>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              blandit arcu in pretium molestie. Interdum et malesuada fames
              acme. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </SubHeading>
          </Grid>
        </Grid>
        <div>
          <Grid
            container
            sx={{ justifyContent: "center" }}
            alignItems="stretch"
            spacing={3}
          >
            {productList.map((pizza, i) => (
              <Grid key={i} item xs={12} md={6} lg={3}>
                <ProductCard pizza={pizza} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default ProductList;
