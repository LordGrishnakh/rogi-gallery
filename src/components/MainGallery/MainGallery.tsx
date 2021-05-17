import React, { useState, useEffect } from "react";
import classes from "./MainGallery.module.scss";

import CategoryController from "./CategoryController/CategoryController";
import Gallery from "./Gallery/Gallery";

export type categories =
  | "Категория 1"
  | "Категория 2"
  | "Категория 3"
  | "Категория 4";

export type photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const MainGallery: React.FC = () => {
  const [category, setCategory] = useState<categories>("Категория 1");
  const [photos, setPhotos] = useState<photo[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setPhotos(null)
    let start: number;
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

    setTimeout(() => {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          setPhotos(data);
          setLoading(false)
        });
    }, 500);
  }, [category]);

  const changeCategory = (category: categories) => {
    setCategory(category);
  };

  return (
    <div className={classes["main-gallery"]}>
      <div className={classes["category-title"]}>
        <h1>{category}</h1>
      </div>

      <Gallery photos={photos} spinnerClass={classes.spinner} className={classes.gallery} loading={loading} />

      <CategoryController
        changeCategory={changeCategory}
        selectedCategory={category}
        className={classes["category-controller"]}
      />
    </div>
  );
};

export default MainGallery;
