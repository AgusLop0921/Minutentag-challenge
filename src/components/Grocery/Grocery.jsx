/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
function Product(props) {
  const { product, onUpvote, onDownvote } = props;
  const handlePlus = () => {
    onUpvote(product.name);
  }

  const handleMinus = () => {
    onDownvote(product.name);
  }

  return (
    <li>
      <span>
        {product.name} - votes: {product.votes}
      </span>
      <div>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </div>
    </li>
  );
}

export function Grocery({ products }) {
  const [productsArray, setProductsArray] = useState(products);

  const upvote = (name) => {
    const productArrayAux = productsArray.slice();
    productArrayAux.find((product) =>
      product.name === name ? (product.votes = product.votes + 1) : null
    );
    setProductsArray(productArrayAux);
  }

  const downvote = (name) => {
    const productArrayAux = productsArray.slice();
    productArrayAux.find((product) =>
      product.name === name ? (product.votes = product.votes - 1) : null
    );
    setProductsArray(productArrayAux);
  }
  return (
    <ul>
      {productsArray.map((product) => (
        <Product
          key={uuidv4()}
          product={product}
          onUpvote={upvote}
          onDownvote={downvote}
        />
      ))}
    </ul>
  );
}
