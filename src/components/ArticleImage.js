import React from "react";

export const ArticleImage = ({ multimedia }) => {
  const thumb = multimedia[2];
  return (
    <>
      <img src={thumb.url} alt={thumb.caption} loading="lazy" />
    </>
  );
};
