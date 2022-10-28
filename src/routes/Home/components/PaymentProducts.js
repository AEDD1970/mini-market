import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { payProducts } from "../../../redux/actions/ShoppingProduct";
import { Helmet } from "react-helmet";
import { useScript } from "../../../utils/hooks";
import { getListProducts } from "../../../redux/selectors/shoppingProduct";
import { v4 as uuidv4 } from 'uuid';
export default function PaymentProducts() {
  const dispatch = useDispatch();
  const renderWompi = useRef();
  const [sessionId, setSessionId] = useState("");
  const listShoppingCart = useSelector(getListProducts)
const priceTotalPorudcts =  listShoppingCart.reduce((prev, curr)=> prev + (curr.priceTotal ? curr.priceTotal: curr.price), 0)
  useScript("https://checkout.wompi.co/widget.js", {}, renderWompi);

  

  const handlepay = () => {
    // const pay = {
    //   session_id: sessionId,

    //   // Otros campos de la transacción
    //   amount_in_cents: 2500000,
    //   currency: "COP",
    //   customer_email: "john.smith@example.com",
    //   reference: "2322er3234ed4",
    // };
    // dispatch(payProducts(pay));
    const checkout = new window.WidgetCheckout({
      currency: "COP",
      amountInCents: priceTotalPorudcts,
      reference: uuidv4(),
      publicKey: "pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf",
      redirectUrl: "https://transaction-redirect.wompi.co/check", // Optional
      taxInCents: {
        // Optional
        vat: 1200,
        consumption: 1000,
      },
      customerData: {
        // Optional
        email: "ing.alexis.duque@gmail.com",
        fullName: "Alexis Duque",
        phoneNumber: "3228107672",
        phoneNumberPrefix: "+57",
        legalId: "123456789",
        legalIdType: "CC",
      },
      shippingAddress: {
        // Optional
        addressLine1: "Calle 123 #4-5",
        city: "Bogota",
        phoneNumber: "3019444444",
        region: "Cundinamarca",
        country: "CO",
      },
    });
    checkout.open(function ( result ) {
        var transaction = result.transaction
      })
  };

  return (
    <div>
      {listShoppingCart.length &&
          <button onClick={handlepay}>Buy products</button>
        
      }
        <div ref={renderWompi}></div>
    </div>
  );
}
