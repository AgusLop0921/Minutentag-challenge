/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";
function Image({ src, onRemove }) {
  return (
    <div className="image">
      <img src={src} alt="img" />
      <button className="remove" onClick={() => onRemove(src)}>
        X
      </button>
    </div>
  );
}

export function ImageGallery({ links }) {
  const [arrayLinks, setArrayLinks] = useState(links);

  function removeLink(src) {
    setArrayLinks(arrayLinks.filter((link) => link !== src));
  }

  useEffect(() => {
    setArrayLinks(links);
  }, [links]);

  return (
    <div className="image-gallery">
      {arrayLinks.map((link) => (
        <Image key={uuidv4()} src={link} onRemove={removeLink} />
      ))}
    </div>
  );
}
