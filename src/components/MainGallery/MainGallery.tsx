import React, { useState } from "react";
import classes from "./MainGallery.module.scss";

import CategoryController from "./CategoryController/CategoryController";

export type categories =
  | "Категория 1"
  | "Категория 2"
  | "Категория 3"
  | "Категория 4";

const MainGallery: React.FC = () => {
  const [category, setCategory] = useState<categories>("Категория 1");

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
