import React, { useContext } from "react";
// import { useSelector } from 'react-redux';
// import {ProductContext} from '../context/products-context';

import { useStore } from "../hook-store/store";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  // const productList = useContext(ProductContext).products;
  const state = useStore()[0]
  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
