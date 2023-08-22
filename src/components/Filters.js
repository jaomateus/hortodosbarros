import React from "react";
import { styled } from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { plant_categories, flower_colors } from "../utils/constants";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      min_price,
      price,
      max_price,
      flower_color,
      n_fixer,
      bee_plant,
      nutrient_miner,
    },
    updateFilters,
    clearFilters,
    all_plants,
  } = useFilterContext();

  // get unique values
  const categories = getUniqueValues(all_plants, "category");
  const colors = getUniqueValues(all_plants, "flower_color");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}
          {/* categories  */}
          <div className="form-control">
            <h5>Layer</h5>
            {/* Conditionally render the buttons */}
            <div>
              {plant_categories.map((c, index) =>
                categories.includes(c) ? (
                  <button
                    key={index}
                    className={`${
                      category === c.toLowerCase() ? "active" : null
                    }`}
                    onClick={updateFilters}
                    type="button"
                    name="category"
                  >
                    {c}
                  </button>
                ) : null
              )}
            </div>
          </div>
          {/* end of categories  */}
          {/* flower color*/}
          <div className="form-control">
            <h5>flower colors</h5>
            <div className="colors">
              {Object.keys(flower_colors).map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="flower_color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        flower_color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return colors.includes(c) ? (
                  <button
                    key={index}
                    className={`${
                      flower_color === flower_colors[c]
                        ? "color-btn active"
                        : "color-btn"
                    }`}
                    type="button"
                    name="flower_color"
                    style={{ background: flower_colors[c] }}
                    data-color={flower_colors[c]}
                    onClick={updateFilters}
                  >
                    {flower_color === flower_colors[c] ? <FaCheck /> : null}
                  </button>
                ) : null;
              })}
            </div>
          </div>
          {/* end flower color*/}
          {/* price    */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end of price    */}
          {/* roles */}
          <div className="form-control">
            <h5>functions</h5>
            <div className="function">
              <label htmlFor="n_fixer">nitrogen fixer</label>
              <input
                type="checkbox"
                name="n_fixer"
                id="n_fixer"
                onChange={updateFilters}
                checked={n_fixer}
              />
            </div>
            <div className="function">
              <label htmlFor="nutrient_miner">nutrient miner</label>
              <input
                type="checkbox"
                name="nutrient_miner"
                id="nutrient_miner"
                onChange={updateFilters}
                checked={nutrient_miner}
              />
            </div>
            <div className="function">
              <label htmlFor="nutrient_miner">bee plant</label>
              <input
                type="checkbox"
                name="bee_plant"
                id="bee_plant"
                onChange={updateFilters}
                checked={bee_plant}
              />
            </div>
          </div>
          {/* end of roles */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: solid;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .function {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
