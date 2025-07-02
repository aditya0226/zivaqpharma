"use client";
import { useState } from "react";
import logo from "../public/images/logo-header.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./Button/Button";
import DropdownButton from "./Button/DropDownButton";
import { List, ListItem } from "./List/List";
import Collapse from "./Collapse/Collapse";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const headerCenterArray = [
    // { name: "About", link: "/about" },
    // { name: "Market", link: "/market" },
    // {
    //   name: "Product",
    //   link: "/product",
    //   dropdownList: [
    //     { label: "product1", onClick: () => console.log("product1clicked") },
    //     { label: "product2", onClick: () => console.log("product1clicked") },
    //     { label: "product3", onClick: () => console.log("product1clicked") },
    //     { label: "product4", onClick: () => console.log("product1clicked") },
    //   ],
    // },
    // {
    //   name: "Smart Extras",
    //   link: "/smart-extras",
    //   dropdownList: [
    //     { label: "product1", onClick: () => console.log("product1clicked") },
    //   ],
    // },
    // { name: "News", link: "/news" },
    // { name: "Demat", link: "/demat" },
    // { name: "Advertise", link: "/advertise" },
  ];

  const headerRightArray = [
    // {
    //   name: "Login",
    //   variant: "outlined",
    //   handleClick: () => console.log("login"),
    // },
    // {
    //   name: "Register",
    //   variant: "contained",
    //   handleClick: () => console.log("register"),
    // },
  ];

  const handleRoute = (link) => {
    router.push(link);
    setIsSidebarOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-primary p-4 z-50 shadow-md h-[72px]">
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          {/* <button className="lg:hidden text-2xl" onClick={toggleSidebar}>
            &#9776;
          </button> */}
          <div className="cursor-pointer w-[143px]">
            {/* <Image
              onClick={() => handleRoute("/")}
              src={logo}
              alt="logo"
              height={46}
              className="p-4"
              // style={{ width: "143px", padding: "10px 10px" }}
            /> */}
            <h1 className="text-4xl cursor-pointer text-center" onClick={() => handleRoute("/")}>ZIVAQ</h1>
          </div>
        </div>

        {/* Sidebar for mobile */}
        {/* <div className="lg:hidden fixed">
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
              isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleSidebar}
          ></div>
          <div
            className={`fixed left-0 top-0 w-64 bg-white h-full duration-300 transform transition-transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="absolute bg-white flex justify-end top-0 left-0 w-full p-4 z-10">
              <button className="text-2xl text-primary" onClick={toggleSidebar}>
                &times;
              </button>
            </div>

            <div className="pt-16 h-full overflow-y-auto">
              <List>
                {headerCenterArray?.map((item, index) =>
                  item.dropdownList ? (
                    <ListItem key={index} className="pt-0 pb-0" divider={false}>
                      <Collapse
                        title={item.name}
                        className="px-0 py-0"
                        childrenProps={{ classes: "pt-0 pb-0" }}
                      >
                        <List className="pt-0 pb-0">
                          {item.dropdownList.map((subItem, subIndex) => (
                            <ListItem key={subIndex} onClick={subItem.onClick}>
                              {subItem.label}
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </ListItem>
                  ) : (
                    <ListItem
                      className=""
                      key={index}
                      onClick={() => handleRoute(item.link)}
                    >
                      {item.name}
                    </ListItem>
                  )
                )}
              </List>
            </div>
          </div>
        </div> */}

        {/* Links for desktop */}
        {/* <div className="hidden lg:flex space-x-1">
          {headerCenterArray?.map((item, index) =>
            item.dropdownList ? (
              <Link href={item.link} key={index}>
                <DropdownButton
                  variant="text"
                  dropdownList={item.dropdownList}
                  listClassName={{
                    bgColor: "bg-white", // Custom background color
                    textColor: "text-primary", // Custom text color
                    fullWidth: true, // Full width dropdown
                  }}
                >
                  {item.name}
                </DropdownButton>
              </Link>
            ) : (
              <Button
                variant="text"
                key={index}
                onClick={() => handleRoute(item.link)}
              >
                {item.name}
              </Button>
            )
          )}
        </div>

        <div className="hidden lg:flex space-x-2">
          {headerRightArray?.map((item, index) => (
            <Button
              onClick={item?.handleClick}
              variant={item?.variant}
              key={index}
            >
              {item.name}
            </Button>
          ))}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
