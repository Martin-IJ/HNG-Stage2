import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlayBtn from "../assets/Play.png";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=f0a13e0071eef42c2bfec2cc0723d3ab&language=en-US`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const img_300 = "https://image.tmdb.org/t/p/w300";
  const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

  return (
    <div className="font-poppins">
      <div className="p-10">
        <div
          className="bg-cover bg-center rounded-3xl w-[100%] h-[500px] m-auto"
          style={{
            backgroundImage: `url(${
              movieDetails.backdrop_path
                ? `${img_300}/${movieDetails.backdrop_path}`
                : unavailable
            })`,
          }}
        >
          <div className="h-full flex justify-center items-center flex-col">
            <img
              src={PlayBtn}
              alt=""
              className="p-5 rounded-full bg-[#ffffff82]"
            />
            <p className="text-gray-300">Watch Trailer</p>
          </div>
        </div>

        <div>
          <div className="flex gap-6 items-center py-5 flex-wrap">
            <h1 data-testid="movie-title">{movieDetails.title}</h1>
            <p data-testid="movie-release-date">{movieDetails.release_date}</p>
            <p>
              <span data-testid="movie-runtime">{movieDetails.runtime}</span>m
            </p>
            <p data-testid="movie-runtime" className="flex space-x-2">
              {movieDetails.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="border border-red-200 text-red-700 md:font-semibold px-3 md:px-4 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </p>
          </div>
          <div className="block md:flex gap-5">
            <p
              data-testid="movie-overview"
              className="tracking-wider text-gray-500 font-[400] text-justify md:w-2/3"
            >
              {movieDetails.overview}
            </p>
            <div className="w-[100%] md:w-1/3">
                <p className="bg-[#BE123C] text-white text-center rounded-lg p-2 w-full mb-3">See Showtimes</p>
                <p className="border border-[#BE123C] bg-[#f7e7eb] text-black text-center w-full rounded-lg p-2">More watch options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
