import React, { useState } from "react";
import Button, { ButtonProps } from "./Button"; // Import the Button component

// Type definition for the dropdown props
interface DropdownListProps {
  label: string;
  onClick: () => void;
}
interface DropdownButtonProps extends ButtonProps {
  listClassName?: {
    bgColor?: string;
    textColor?: string;
    fullWidth: boolean;
  };
  dropdownList: [DropdownListProps];
  otherButtonProp?: any;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  disabled = false,
  size = "medium",
  className,
  dropdownList = [],
  fullWidth = false,
  shape = "pill",
  disableElevation = false,
  otherButtonProp,
  listClassName = { bgColor: "white", textColor: "black"},
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine styles for the dropdown list
  const listStyles = `
    absolute left-0 ${listClassName.bgColor ? listClassName.bgColor : 'bg-white'} ${listClassName.textColor ? listClassName.textColor : 'text-primary'} border border-gray-300 rounded-md shadow-lg
    opacity-100 transition-opacity duration-300 ease-in-out z-10
    whitespace-nowrap
  `;

  return (
    <div
      className={`relative inline-block ${fullWidth ? "w-full" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...rest}
    >
      {/* Use the Button component here */}
      <Button
        onClick={onClick}
        variant={variant}
        color={color}
        disabled={disabled}
        size={size}
        fullWidth={fullWidth}
        shape={shape}
        disableElevation={disableElevation}
        className={className}
        {...otherButtonProp}
      >
        <div className="flex items-center">
          {children} {/* Button text */}
          {/* Arrow icon, rotating on hover */}
          <span
            className={`ml-2 transform transition-transform duration-300 ${
              isHovered ? "rotate-180" : ""
            }`}
          >
            v
          </span>
        </div>
      </Button>

      {isHovered && (
        <ul className={listStyles}>
          {dropdownList.map((item:DropdownListProps, index:number) => (
            <li
              key={index}
              className={`px-4 py-2 hover:bg-${color}-100`}
              onClick={item.onClick}
            >
              {item.label}
            </li>
          ))}
          {/* Sample dropdown list */}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
