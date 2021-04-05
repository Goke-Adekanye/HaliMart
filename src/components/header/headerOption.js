import { Avatar } from "@material-ui/core";
import React from "react";
import "./styles/headerOption.css";

export default function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOption_icon" />}
    </div>
  );
}
