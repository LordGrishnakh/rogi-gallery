import React, { useState, useEffect } from "react";
import classes from "./MainGallery.module.scss";

import CategoryController from "./CategoryController/CategoryController";

export type categories =
  | "Категория 1"
  | "Категория 2"
  | "Категория 3"
  | "Категория 4";

const MainGallery: React.FC = () => {
  const [category, setCategory] = useState<categories>("Категория 1");

  useEffect(() => {
    let start;
    let limit = 6;
    switch (category.split(" ")[1]) {
      case "1":
        start = 0;
        break;
      case "2":
        start = 6;
        break;
      case "3":
        start = 12;
        break;
      case "4":
        start = 18;
        break;
      default:
        break;
    }

    fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data));

    // return () => {
    //   cleanup
    // }
  }, [category]);

  const changeCategory = (category: categories) => {
    setCategory(category);
  };

  return (
    <div className={classes["main-gallery"]}>
      <div className={classes["category-title"]}>
        <h1>{category}</h1>
      </div>
      {/* Компонент с 6 картинками - перерисовывается от смены категории */}
      <div className={classes.gallery}>1</div>
      {/* компонент комнтроллер компонентов */}
      <CategoryController
        changeCategory={changeCategory}
        selectedCategory={category}
        className={classes["category-controller"]}
      />
    </div>
  );
};

export default MainGallery;
