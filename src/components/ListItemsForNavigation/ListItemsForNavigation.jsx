/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";
import { itemsList } from "../../mocks/mocks";

export function ListItemsForNavigation(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeItemRef = useRef();

  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.focus();
    }
  }, [selectedIndex]);

  function handleKeyDown(event) {
    let newIndex;

    switch (event.key) {
      case "ArrowUp":
        newIndex = selectedIndex - 1;
        break;
      case "ArrowDown":
        newIndex = selectedIndex + 1;
        break;
      case "ArrowLeft":
        newIndex = selectedIndex - 1;
        break;
      case "ArrowRight":
        newIndex = selectedIndex + 1;
        break;
      default:
        return;
    }

    event.preventDefault();

    newIndex = (newIndex + itemsList.length) % itemsList.length;

    setSelectedIndex(newIndex);
  }

  return (
    <ul onKeyDown={handleKeyDown} tabIndex={0}>
      {itemsList.map((item, index) => (
        <li
          key={index}
          tabIndex={0}
          ref={index === selectedIndex ? activeItemRef : null}
        >
          {item.name} - {item.position}
        </li>
      ))}
    </ul>
  );
}