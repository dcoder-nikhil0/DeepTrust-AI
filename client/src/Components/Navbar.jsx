// Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { FaPhone, FaInfoCircle, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const navLinks = [
    { label: "About", icon: <FaInfoCircle />, href: "/about" },
    { label: "Contact", icon: <FaPhone />, href: "/contact" },
  ];

  return (
    <>
      <AppBar position="static" className="bg-white shadow-md">
        <Toolbar className="flex bg-gray-900 justify-between items-center">
          {/* Logo */}
          <Typography variant="h6" className="text-white font-bold">
            DeepTrust AI
          </Typography>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 items-center text-white mx-15 text-base font-medium">
            {navLinks.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                {icon}
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <IconButton onClick={toggleDrawer(true)} className="text-white">
              <FaBars className="text-white" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <div className="w-64 flex flex-col bg-gray-900 h-full p-4">
          <div className="flex bg-gray-900 justify-between items-center mb-6">
            <Typography variant="h6" className="text-white font-bold">
              DeepTrust AI
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <MdClose className="text-white" />
            </IconButton>
          </div>
          <List className="text-white">
            {navLinks.map(({ label, icon, href }) => (
              <ListItem
                button
                key={label}
                component="a"
                href={href}
                onClick={toggleDrawer(false)}
              >
                {icon}
                <ListItemText className="ml-3">{label}</ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
