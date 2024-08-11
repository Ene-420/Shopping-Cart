import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/card";
import styles from "./homePage.module.css";
import { slides } from "../../data.json";
import Slider from "../Slider/Slider";
//import Card from "./card";

export default function HomePage({ content }) {
  // const { jewellry, electronics, menClothing, womenClothing } = content();
  // const [gender, setGender] = useState("men");

  return (
    <>
      <Slider  />
    </>
  );
}
