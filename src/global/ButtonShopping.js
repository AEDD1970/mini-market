import React from 'react'
import CarStore from "../assets/images/carStore.png"
import styles from "./global.module.scss"
import { useSelector } from 'react-redux';
import { getListProducts } from '../redux/selectors/shoppingProduct';

export default function ButtonShopping() {
  const listShoppingCart = useSelector(getListProducts)
  const quantityProducts = listShoppingCart.reduce((prev, curr)=> prev + curr.quantity, 0)

  return (
    <div className={styles.shopping}>
        <button onClick={() => console.log("alsjkd")}>
            <img src={CarStore} />
            <p>{quantityProducts}</p>
        </button>
    </div>
  )
}
