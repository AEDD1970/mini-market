import React, { useState } from "react";
import ButtonShopping from "../../global/ButtonShopping";
import ListProducts from "./components/ListProducts";
import Modal from "../../global/Modal";
import AddProduct from "./components/AddProduct";
import styles from "./home.module.scss";
import Store from "../../assets/images/store.png";
import { ShoppingCart } from "./components/ShoppingCart";

export default function Home() {
  const [activeModal, setDesableModal] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const handleAddProduct = (data) => {
    setProductDetail(data);
    setDesableModal(true);
  };
  const handleClose = () => {
    setDesableModal(false);
  };
  return (
    <div className={styles.wapperHome}>
      <h1>Mini Market Home</h1>
      <hr className={styles.divider} />
      <div className={styles.headerHome}>
        <img src={Store} alt="store" />
        <ButtonShopping />
      </div>
      <div className={styles.contentHome}>
        <ListProducts addProduct={handleAddProduct} />
        <ShoppingCart />
      </div>
      <Modal open={activeModal} onClosed={handleClose}>
        <AddProduct product={productDetail} handleClose={handleClose} />
      </Modal>
    </div>
  );
}
