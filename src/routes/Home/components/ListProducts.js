import React from "react";
import Card from "../../../global/Card";
import { listProduct } from "../../../utils/listProducts";
import styles from "../home.module.scss";

export default function ListProducts({ addProduct }) {
  return (
    <div className={styles.wrapperListproducts}>
      {listProduct.map((item) => {
        const pathImage = item.image;
        return (
          <Card key={item.name} onClick={() => addProduct(item)}>
            <img
              src={require(`../../../assets/images/${pathImage}`)}
              alt={item.description}
            />
          </Card>
        );
      })}
    </div>
  );
}
