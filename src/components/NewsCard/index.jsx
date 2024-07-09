import React from "react";
import Image from "next/image";

import placeHolderNews from "../../assets/images/news-place-holder.jpg";
import "./NewsCard.scss";

const NewsCard = ({
  title,
  url,
  imageSrc,
  hasDescription,
  description,
  tag,
}) => {
  return (
    <div
      className="news-card-container"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="image-container">
        <Image
          src={imageSrc ? imageSrc : placeHolderNews}
          loading="lazy"
          alt="alt text"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="title">{title}</h3>
      {hasDescription && <p className="description">{description}</p>}

      <p className="tag">{tag ? tag : "General"}</p>
    </div>
  );
};

export default NewsCard;
