import React from "react";

import classes from "./PhotoDescription.module.scss";

import { useLocation } from "react-router-dom";
import { photo } from "../MainGallery/MainGallery";

const PhotoDescription = () => {
  const location = useLocation();

  const { state: photoState } = location as { state: { photo: photo } };
  const { photo } = photoState;

  console.log(photo);

  return (
    <div className={classes["description-container"]}>
      <div className={classes["description-title"]}>
        <h1>{photo.title.slice(0, 10)}</h1>
        <img src={photo.url} alt={photo.title} />
      </div>
      <div className={classes["description"]}>
        <h2>{photo.title}</h2>
        <h3>ID: {photo.id}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum
          quos id ipsam eum cupiditate accusantium eius minus dicta impedit.
          Dolorem nemo eveniet at voluptas corporis ex similique consequatur
          maiores atque suscipit quia dolores ducimus autem, voluptatem enim in
          corrupti. Voluptate omnis vel explicabo, quidem sed delectus
          dignissimos corrupti est.
        </p>
        <button className={classes.notcool}>Rogi_notcool</button>
        <button className={classes.cool}>Rogi_cool</button>
      </div>
    </div>
  );
};

export default PhotoDescription;
