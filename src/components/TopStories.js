import React from "react";
import { Card } from "./Card";
import useFetch from "../hooks/useFetch";

function TopStories() {
  const { error, isLoaded, topStories } = useFetch("arts");

  return (
    <>
      <section className="px-5 container mx-auto">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Top Stories
        </h1>
        {error && <div> {error} </div>}
        {!isLoaded && <div> ...Loading </div>}
        <ul className="grid grid-cols-3 gap-10">
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

export default TopStories;
