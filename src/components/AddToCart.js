import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

// components
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ plant }) => {
  const { id, stock } = plant;

  const [amount, setAmmount] = useState(1);

  const increase = () => {
    setAmmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <div className="amount-btns">
          <button type="button" className="amount-btn" onClick={decrease}>
            <FaMinus />
          </button>
          <h2 className="ammount">{amount}</h2>
          <button type="button" className="amount-btn" onClick={increase}>
            <FaPlus />
          </button>
        </div>
      </div>
      <Link to="/cart" className="btn">
        add to cart
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .amount-btns {
    display: grid;
    width: 140px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }

  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default AddToCart;
