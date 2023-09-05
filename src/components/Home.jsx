import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(100);

export default function Home() {
  const productsArray = [...Array(20)].map((p) => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [cart, setCart] = useState([]);

  const [products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct
          prod={prod}
          key={prod.id}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
}
