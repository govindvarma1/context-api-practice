import React, { useContext, useState } from "react";
import SingleProduct from "./SingleProduct";
import { faker } from "@faker-js/faker";
import { Cart } from "../Context";

export default function Home() {
  faker.seed(100);
  const productsArray = [...Array(20)].map((p, index) => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
}
