import React from "react";
import { ArticleImage } from "./ArticleImage";

export const Card = ({ url, title, abstract, multimedia }) => {
  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5 h-52">
        <a className="text-cyan-500 font-semibold" href={url}>
          {title}
        </a>
        <p>{abstract}</p>
        <ArticleImage multimedia={multimedia} />
      </article>
    </>
  );
};
