import React from 'react';
import ImageCard from "./ImageCard";
import "./imageList.css"

const ImageList = ({images}) => {
    const imageList = images.map( i => {
        return <ImageCard image={i} key={i.id} />
    });

    return (
        <div className="image-list">
            {imageList}
        </div>
    )
};

export default ImageList;