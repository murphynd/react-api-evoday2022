import React from "react";
import { ArticleImage } from "./ArticleImage";

export const Card = ({ url, title, abstract, multimedia }) => {
  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5 h-96">
        {multimedia ? (
          <ArticleImage multimedia={multimedia[2]} />
        ) : (
          <p>no image</p>
        )}
        <a className="text-cyan-500 font-semibold" href={url}>
          {title}
        </a>
        <p>{abstract}</p>
      </article>
    </>
  );
};
