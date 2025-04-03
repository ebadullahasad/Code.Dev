//
import React from "react";

const Button = ({
  image, // Can be a React component or an image URL
  imagediv,
  imageStyle,
  divstyle,
  btnStyle,
  btnname,
  type,
  onPress,
  disabled,
}) => {
  return (
    <button
      className={divstyle}
      type={type}
      onClick={onPress}
      disabled={disabled}
    >
      <div className={imagediv}>
        {/* Check if image is a React component or an image URL */}
        {typeof image === "string" ? (
          <img src={image} className={imageStyle} />
        ) : (
          <span className={imageStyle}>{image}</span> // Correctly render JSX icons
        )}
        {btnname && <p className={btnStyle}>{btnname}</p>}
      </div>
    </button>
  );
};

export default Button;
