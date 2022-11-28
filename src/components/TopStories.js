import React, { memo } from "react";
import { Card } from "./Card";
import useFetch from "../hooks/useFetch";

function TopStories({ section }) {
  const { error, isLoaded, topStories } = useFetch(section);

  return (
    <>
      <section className="px-5 container mx-auto">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {section}
        </h1>
        {error && <div> {error} </div>}
        {!isLoaded && <div> ...Loading </div>}
        <ul className="grid grid-cols-2 gap-10">
          {topStories.map((article, index) => (
            <li key={index}>
              <Card
                url={article.url}
                title={article.title}
                abstract={article.abstract}
                multimedia={article.multimedia}
                byline={article.byline}
                created_date={article.created_date}
                published_date={article.published_date}
                des_facet={article.des_facet}
                geo_facet={article.geo_facet}
                subsection={article.subsection}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default memo(TopStories);
