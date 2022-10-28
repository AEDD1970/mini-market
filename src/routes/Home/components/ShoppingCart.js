import React from 'react'
import { useSelector } from 'react-redux'
import styles from "../home.module.scss"
import { getListProducts } from '../../../redux/selectors/shoppingProduct';
import PaymentProducts from './PaymentProducts';

export const ShoppingCart = () => {
  const listShoppingCart = useSelector(getListProducts)
  return (
    <div className={styles.shoppingCartWrapper}>
      <ul>
        {listShoppingCart.map(({name, image, quantity, description, priceTotal, price}, index) => (
          <li>
            <div className={styles.wapperlistProdutShopping}>
              <img src={require(`../../../assets/images/${image}`)}
               alt={description}/>
              <p>{name}</p>
              <span>{priceTotal || price}</span>
              <span>{quantity}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.productBtn}>
        <PaymentProducts />
      </div>
      
    </div>
  )
}
