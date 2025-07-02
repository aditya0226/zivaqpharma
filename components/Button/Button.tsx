import { info } from "console";
import React from "react";
import { cx } from "../Utils/utils";

// Type definition for the button props
export interface ButtonProps {
  children: any;
  onClick?: () => void;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "warning" | "success" | "info";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  fullWidth?: boolean;
  shape?: "rounded" | "square" | "pill";
  disableElevation?: boolean; // New prop to control shadow
  rest?: any;
  ref?: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  disabled = false,
  size = "medium",
  className,
  fullWidth = false,
  shape = "pill",
  ref=null,
  disableElevation = false, // Default is false, which means the button will have shadow
  ...rest
}) => {
  const baseStyles = "focus:outline-none transition duration-300 ease-in-out";

  // Size modifiers
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Color modifiers
  const colorStyles = {
    primary: "text-white bg-primary hover:bg-primary-600",
    secondary: "text-white bg-secondary hover:bg-secondary-600",
    error: "text-white bg-error hover:bg-error-600",
    warning: "text-white bg-warning hover:bg-warning-600",
    success: "text-white bg-success hover:bg-success-600",
    info: "text-white bg-info hover:bg-info-600",
  };

  // Variant modifiers
  const variantStyles = {
    contained: `${colorStyles[color]}`,
    outlined: `border-2 border-${color} text-${color} hover:bg-${color}-100`,
    text: `text-${color} hover:bg-${color}-100 hover:text-${color}-600`,
  };

  // Default shadow when disableElevation is false
  const shadowStyles =
    variant === "text" || disableElevation ? "shadow-none" : "shadow-md";

  const classes = cx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    shadowStyles,
    disabled ? "opacity-50 cursor-not-allowed" : "",
    fullWidth ? "w-full" : "",
    shape === "rounded"
      ? "rounded-full"
      : shape === "square"
      ? "rounded-none"
      : "rounded-md",
    className
  );

  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
