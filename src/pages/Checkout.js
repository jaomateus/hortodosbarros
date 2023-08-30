import React from "react";
import { Stripe } from "../components";
import { styled } from "styled-components";

// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <Wrapper className="page">
      {cart.length < 1 ? (
        <div className="empty">
          <h2>your car is empty</h2>
          <Link to="/plantshop" class="btn">
            fill it
          </Link>
        </div>
      ) : (
        <Stripe />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default Checkout;
