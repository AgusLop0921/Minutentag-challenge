/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *      <span>*</span>
 *      <span>*</span>
 *      <span>*</span>
 *      <span>*</span>
 *      <span>*</span>
 *  </div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const STARTS = 5;
const START_ARRAY = Array(STARTS).fill("");

export function Rating() {
  const [rate, setRate] = useState(-1);
  return (
    <div id="rating">
      {START_ARRAY.map((r, index) => (
        <span
          key={uuidv4()}
          data-testid="star"
          className={rate >= index ? "active" : null}
          onClick={() => {
            rate !== index ? setRate(index) : setRate(-1);
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}
