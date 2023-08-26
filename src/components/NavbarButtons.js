import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { BsFillBagFill } from "react-icons/bs";
import { FaUserPlus, FaUserMinus } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarButtons = () => {
  const { total_items } = useCartContext();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Wrapper className="navbar-btn-wrapper">
      <Link to="cart" className="cart-btn">
        <span className="cart-container">
          <BsFillBagFill />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {isAuthenticated ? (
        <button
          type="button"
          className="auth-btn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <FaUserMinus />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;

// const Wrapper = styled.div`
//   display: flex;

//   .cart-btn {
//     display: flex;
//     align-items: center;
//     color: var(--clr-grey-1);
//     font-size: 1.5rem;
//     margin-right: 1.5rem;
//   }
//   .login-btn {
//     display: flex;
//     align-items: center;
//     color: var(--clr-grey-1);
//     font-size: 1.8rem;
//   }
// `;

export default NavbarButtons;
