import React from "react";
import styles from "../home.module.scss";
import { actionAddToCart } from "../../../redux/actions/ShoppingProduct";
import { useDispatch } from "react-redux";

export default function AddProduct({ product, handleClose }) {
  const dispatch = useDispatch();
  const { image, name, description, price, quantity } = product;
  const handleAction = () => {
    dispatch(actionAddToCart(product));
    handleClose()
  };
  return (
    <div className={styles.wapperaddproduct}>
      <div>
        {image && (
          <img
            src={require(`../../../assets/images/${image}`)}
            alt={description}
          />
        )}
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit fermentum risus, quis hendrerit nisi efficitur non. Sed
            auctor dui non ligula sodales, at sollicitudin massa lacinia. nec
            nulla felis.
          </p>
        </div>
        <div className={styles.productBtn}>
          <span>${price}</span>
          <button onClick={handleAction} type="button">
            <p>Add product</p>
          </button>
        </div>
      </div>
    </div>
  );
}
