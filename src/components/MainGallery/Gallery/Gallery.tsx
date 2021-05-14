import React from "react";

import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./Gallery.module.scss";

import { photo } from "../MainGallery";

const Gallery: React.FC<{
  photos: photo[] | null;
  className: string;
  loading: boolean;
}> = (props) => {
  console.log("rendered");

  return (
    <>
      <div className={props.className}>
        {props.loading && <Spinner loading={props.loading} />}
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
