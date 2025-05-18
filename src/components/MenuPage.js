import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/menuPage.css";
import Header from "./Header.js";
import MenuGrid from "./MenuGrid.js";

export default function MenuPage() {

  return (
    <>
      <Header />
      <MenuGrid />
    </>
     );
}
