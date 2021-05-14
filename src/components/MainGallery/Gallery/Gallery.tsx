import React from "react";
import { Link, useHistory } from "react-router-dom"

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
  let history = useHistory()

  const redirect = (id: number) => {
    history.push(`/description/${id}`)
  }

  return (
    <>
      {props.loading && <Spinner className={props.spinnerClass} loading={props.loading} />}
      <div className={props.className}>
        {props.photos?.map((photo) => (
          <div key={photo.id} className={classes["gallery-item"]}>
            <img src={photo.url} alt={photo.thumbnailUrl} />
            {/* <button onClick={()=>redirect(photo.id)}>Read More</button> */}
            <button><Link to={{ pathname: `/description/${photo.id}`, state: { photo } }}>Read More</Link></button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
