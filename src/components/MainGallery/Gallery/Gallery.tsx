import React from "react";

import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./Gallery.module.scss";

import { photo } from "../MainGallery";

const Gallery: React.FC<{
  photos: photo[] | null;
  className: string;
  spinnerClass: string;
  loading: boolean;
}> = (props) => {
  console.log("rendered");

  return (
    <>
      {props.loading && <Spinner className={props.spinnerClass} loading={props.loading} />}
      <div className={props.className}>
        {props.photos?.map((photo) => (
          <div className={classes["gallery-item"]}>
            <img src={photo.url} alt={photo.thumbnailUrl} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
