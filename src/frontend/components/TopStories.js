import { Card } from "./Card";
import useFetch from "../hooks/useFetch";

function TopStories({ section }) {
  const { isError, errorMessage, isLoaded, topStories } = useFetch(section);
  console.log("rendered top stories for this section:", section);
  console.log("Error message: ", errorMessage);
  console.log("is there an error: ", isError);
  console.log("is it loaded: ", isLoaded);

  return (
    <>
      <section className="px-5 container mx-auto">
        <h1 className="text-left	capitalize mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {section}
        </h1>
        {!isLoaded && (
          <div className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            {" "}
            ...Loading{" "}
          </div>
        )}
        {isError && <div> {errorMessage} </div>}
        {!isError && isLoaded && (
          <ul className="grid grid-cols-3 gap-10">
            {topStories.map((article) => (
              <li key={article.url}>
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
        )}
      </section>
    </>
  );
}

export default TopStories;
