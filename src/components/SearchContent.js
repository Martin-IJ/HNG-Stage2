import React from "react";
import FilmLogo from "../assets/IMOb.png";
import Fruit from "../assets/fruit.png";
import loadingImg from "../assets/loading.gif";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const SearchContent = () => {
  const { content, loading, searchText } = useGlobalContext();

  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  loading && (
    <section className="m-auto text-center h-screen flex items-center">
      <img src={loadingImg} alt="loading" className="m-auto" />
    </section>
  );

  if (content.length < 1) {
    return (
      <section className="m-auto text-center flex items-center h-screen">
        <h4>No search matched your search term. Please try again.</h4>
      </section>
    );
  }

  return (
    <div className="text-black w-[90%] m-auto my-10 font-sans">
      <h1 className="text-[36px] font-[700] pb-5">
        Search Result for{" "}
        <span className="uppercase underline tracking-wide text-blue-800">
          {searchText}
        </span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {content.map((movie) => {
          const {
            id,
            title,
            poster_path,
            release_date,
            vote_count,
            popularity,
          } = movie;
          const firstTwoVoteCount = String(vote_count).slice(0, 2);
          const firstTwoPopularity = String(popularity).slice(0, 2);
          return (
            <div
              data-testid="movie-card"
              key={id}
              className="w-[100%] border border-gray-200 rounded-lg shadow m-auto"
            >
              <Link to={`/movies/${id}`}>
                <img
                  data-testid="movie-poster"
                  src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                  className="rounded-t-lg w-[100%]"
                  alt={title}
                />
              </Link>
              <div className="p-3">
                <p
                  data-testid="movie-release-date"
                  className="text-2xl text-gray-400 text-[12px] font-[700]"
                >
                  {release_date}
                </p>
                <h3
                  data-testid="movie-title"
                  className="text-2xl mb-2 text-gray-900 text-[18px] font-[700] truncate max-w-[250px]"
                >
                  {title}
                </h3>
                <div className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <img src={FilmLogo} alt="film logo" />{" "}
                    <p className="text-gray-600">{firstTwoPopularity} / 100</p>
                  </span>
                  <span className="flex items-center gap-2">
                    <img src={Fruit} alt="rated movies" />{" "}
                    <p className="text-gray-600">{firstTwoVoteCount}%</p>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchContent;
