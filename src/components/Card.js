import React from "react";

export const Card = (props) => {
  return (
    <div>
      <a href={props.article.url}>{props.article.title}</a>
      <p>{props.article.abstract}</p>
      <img src={props.article.multimedia[2].url} alt="" />
    </div>
  );
};
