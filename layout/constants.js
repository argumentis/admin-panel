import React from "react";
// material UI
import DashboardIcon from "@material-ui/icons/Dashboard";
import FilterIcon from "@material-ui/icons/Filter";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PeopleIcon from "@material-ui/icons/People";
import MessageIcon from "@material-ui/icons/Message";

export const listItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    nestedListItems: [],
    pathname: "/",
  },
  {
    name: "Catalog",
    icon: <FilterIcon />,
    nestedListItems: [
      { name: "Products", icon: <FilterIcon />, pathname: "/products" },
      { name: "Categories", icon: <BookmarkIcon />, pathname: "/categories" },
    ],
  },
  {
    name: "Customers",
    icon: <PeopleIcon />,
    nestedListItems: [
      { name: "Customers", icon: <PeopleIcon />, pathname: "/customers" },
    ],
  },
  {
    name: "Reviews",
    icon: <MessageIcon />,
    nestedListItems: [],
    pathname: "/reviews",
  },
];
