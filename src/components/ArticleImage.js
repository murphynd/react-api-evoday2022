import React from "react";

export const ArticleImage = ({ multimedia }) => {
  return (
    <>
      <img className="w-full" src={multimedia.url} alt={multimedia.caption} />
    </>
  );
};
