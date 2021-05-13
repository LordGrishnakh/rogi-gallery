import React, { useRef, useState } from "react";
import classes from "./CategoryController.module.scss";

import { categories } from "../MainGallery";

type categoryControllerProps = {
  className: string;
  selectedCategory: string;
  changeCategory: (category: categories) => void;
};

const CategoryController: React.FC<categoryControllerProps> = (props) => {
  const [active, setActive] = useState(1);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const changeCategory = (e: any) => {
    if (e.target.closest("span")) {
      const activeIdx = e.target.closest("span").textContent.split(" ")[1]

      setActive(+activeIdx)
    }
    
    if (e.target.closest("span") && props.selectedCategory !== e.target.closest("span").textContent) {
      props.changeCategory(e.target.closest("span").textContent);
    }
  };

  return (
    <div
      className={props.className}
      ref={categoriesRef}
      onClick={(e) => changeCategory(e)}
    >
      <div className={classes["category-group"]}>
        <div className={classes.line}></div>
        <span className={active === 1 ? classes.active : undefined}>Категория 1</span>
      </div>
      <div className={classes["category-group"]}>
        <div className={classes.line}></div>
        <span className={active === 2 ? classes.active : undefined}>Категория 2</span>
      </div>
      <div className={classes["category-group"]}>
        <div className={classes.line}></div>
        <span className={active === 3 ? classes.active : undefined}>Категория 3</span>
      </div>
      <div className={classes["category-group"]}>
        <div className={classes.line}></div>
        <span className={active === 4 ? classes.active : undefined}>Категория 4</span>
      </div>
    </div>
  );
};

export default CategoryController;
