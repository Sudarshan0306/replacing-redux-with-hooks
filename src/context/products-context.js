import { createContext, useState } from "react";

export const ProductContext = createContext({
  products: [],
  toggleFav: (id) => {}
});

export default (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFav = (productId) => {
    setProductsList((curretProdList) => {
      const prodIdex = curretProdList.findIndex((p) => p.id === productId);
      const newFavStatus = !curretProdList[prodIdex].isFavorite;
      const updatedProducts = [...curretProdList];
      updatedProducts[prodIdex] = {
        ...curretProdList[prodIdex],
        isFavorite: newFavStatus
      };
      return updatedProducts;
    });
  };
  return (
    <ProductContext.Provider value={{ products: productsList, toggleFav }}>
      {props.children}
    </ProductContext.Provider>
  );
};
