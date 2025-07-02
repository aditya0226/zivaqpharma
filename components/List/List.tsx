import React from "react";
import { cx } from "../Utils/utils";

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
  rest?: any;
  divider?: boolean;
  onClick?: () => void; // Optional onClick for interactivity
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  divider = true,
  onClick,
  ...rest
}) => {
  const classes = cx(
    "flex py-2 px-0 hover:bg-primary-100 w-full transition-all",
    divider ? "border-b border-primary-100" : "",
    onClick ? "cursor-pointer" : "",
    className
  );

  return (
    <li className={classes} onClick={onClick} {...rest}>
      {children}
    </li>
  );
};

interface ListProps {
  children: React.ReactNode; // Allow custom ListItems to be passed as children
  rest?: any;
  className?: string;
}

export const List: React.FC<ListProps> = ({ children, className, ...rest }) => {
  const classes = cx("bg-white w-full space-2 p-2", className);
  return (
    <ul className={classes} {...rest}>
      {children}
    </ul>
  );
};
