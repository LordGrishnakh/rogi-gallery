import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import { photo } from '../MainGallery/MainGallery';

const PhotoDescription = () => {
  const id = useParams<{id: string}>()
  const location = useLocation()

  const { state: photoState } = location as { state: { photo: photo } }
  const { photo } = photoState

  console.log(photo);

  return (
    <div style={{color: "red"}}>
      rogi_photo description {id.id}
      <div>
        <h1>{photo.title}</h1>
        <img src={photo.url} alt={photo.title} />
      </div>
    </div>
  )
}

export default PhotoDescription
