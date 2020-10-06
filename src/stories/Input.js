import React from "react";
import PropTypes from "prop-types";
import "./input.css";

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  primary,
  backgroundColor,
  size,
  placeholder,
  type,
  name,
  autoFocus,
  handelChange,
  ...props
}) => {
  const mode = primary
    ? "storybook-input--primary"
    : "storybook-input--secondary";
  return (
    <input
      name={name}
      type={type}
      className={["storybook-input", `storybook-input--${size}`, mode].join(
        " ",
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
      placeholder={placeholder}
      autoFocus={autoFocus}
      onChange={(event) => {
        handelChange(event.target.name, event.target.value);
      }}
    />
  );
};

Input.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * should the input field be autoFocus?
   */
  autoFocus: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * input placeholder
   */
  placeholder: PropTypes.string,
  /**
   * input name
   */
  name: PropTypes.string,
  /**
   * input type
   */
  type: PropTypes.string,
  /**
   * Optional click handler
   */
  handelChange: PropTypes.func,
};

Input.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  type: "text",
  name: "input",
  onChange: undefined,
  autoFocus: false,
};
