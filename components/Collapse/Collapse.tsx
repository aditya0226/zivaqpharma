import React, { useState } from "react";
import { List, ListItem } from "../List/List"; // Import List and ListItem components
import { cx } from "../Utils/utils";

// Define the props for the reusable CollapsibleList component
interface CollapsibleListProps {
  title: string; // The title for the first ListItem
  children?: React.ReactNode; // Allow custom ListItems to be passed as children
  divider?: boolean; // Optional divider prop
  className?: string; // Optional className prop
  headerProps?: {
    classes?: string;
    headerOtherProps?: any;
  };
  childrenProps?: {
    classes?: string;
    childrenOtherProps?: any;
  };
}

const Collapse: React.FC<CollapsibleListProps> = ({
  title,
  children,
  className,
  divider = true,
  headerProps = {},
  childrenProps = {},
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the collapse

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev); // Toggle the collapse state
  };
  const listClass = cx("w-full max-w-xl", className ? className : "");
  const headerClass = cx(
    "flex justify-between",
    headerProps?.classes ? headerProps.classes : ""
  );
  const childClass = cx(
    "overflow-hidden transition-all duration-300 ease-in-out",
    isOpen ? "h-auto" : "h-0",
    childrenProps?.classes ? childrenProps.classes : ""
  );

  return (
    <List className={listClass} {...rest}>
      <ListItem
        onClick={toggleCollapse}
        className={headerClass}
        divider={divider}
        {...headerProps?.headerOtherProps}
      >
        <span>{title}</span>
        {children && (
          <span
            className={`px-3 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            v
          </span>
        )}
      </ListItem>

      {/* Other ListItems that will be conditionally shown/hidden */}
      {children && isOpen && (
        <ListItem
          className={childClass}
          divider={false}
          {...childrenProps?.childrenOtherProps}
        >
          {children}
        </ListItem>
      )}
    </List>
  );
};

export default Collapse;
