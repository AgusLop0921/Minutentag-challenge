/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef } from "react";

function Input(props) {
  const { forwardedRef, ...otherProps } = props;
  return <input {...otherProps} ref={forwardedRef} />;
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />;
});

export function FocusableInput({ focusable = true }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (
      focusable &&
      inputRef.current &&
      document.activeElement !== inputRef.current
    ) {
      inputRef.current.focus();
    }
  }, [focusable]);

  return <TextInput ref={inputRef} />;
}
