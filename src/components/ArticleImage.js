import React from "react";

export const ArticleImage = ({ multimedia }) => {
  return (
    <>
      <img
        className="rounded-3xl"
        src={multimedia.url}
        alt={multimedia.caption}
      />
    </>
  );
};
