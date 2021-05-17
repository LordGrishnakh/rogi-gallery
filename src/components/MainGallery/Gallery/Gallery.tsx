import React from "react";
import { Link } from "react-router-dom"

import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./Gallery.module.scss";

import { photo } from "../MainGallery";

const Gallery: React.FC<{
  photos: photo[] | null;
  className: string;
  spinnerClass: string;
  loading: boolean;
}> = (props) => {

  return (
    <>
      {props.loading && <Spinner className={props.spinnerClass} loading={props.loading} />}
      <div className={props.className}>
        {props.photos?.map((photo) => (
          <div key={photo.id} className={classes["gallery-item"]}>
            <img src={photo.url} alt={photo.thumbnailUrl} />
            <Link to={{ pathname: `/description/${photo.id}`, state: { photo } }}>Подробнее</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
