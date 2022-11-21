import React from "react";
import { ArticleImage } from "./ArticleImage";

export const Card = ({
  url,
  title,
  abstract,
  multimedia,
  byline,
  created_date,
  published_date,
  des_facet,
  geo_facet,
  subsection,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {multimedia && <ArticleImage multimedia={multimedia[1]} />}
      <div className="px-6 py-4">
        <a className="font-bold text-xl mb-2" href={url}>
          {title}
        </a>
        <p className="text-gray-700 text-base">{abstract} </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {des_facet.map((des_facet) => (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{des_facet}
          </span>
        ))}
      </div>
    </div>
  );
};
