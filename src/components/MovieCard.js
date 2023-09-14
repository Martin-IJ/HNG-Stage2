import React, { useEffect, useState } from 'react'
import FilmLogo from '../assets/IMOb.png'
import Fruit from '../assets/fruit.png'

const MovieCard = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMovie = async () => {
        const apiKey = 'f0a13e0071eef42c2bfec2cc0723d3ab'
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
        const data = await response.json();
        const first10Movies = data.results.slice(0, 10)  // Get the first 10 movies
        setMovies(first10Movies);
    }
    console.log(movies);

    useEffect(() => {
        fetchMovie();
    }, [])

    const img_300 = 'https://image.tmdb.org/t/p/w300';
    const unavailable = 'https://www.movienewz.com/img/films/poster-holder.jpg';

  return (
    <div className='text-black w-[90%] m-auto my-10 font-sans'>
        <h1 className='text-[36px] font-[700]'>Featured Movie</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
            movies.map((movie) => {
                const {id, title, poster_path, release_date, vote_count, popularity} = movie;
                const firstTwoVoteCount = String(vote_count).slice(0, 2);
                const firstTwoPopularity = String(popularity).slice(0, 2);
                return(
                    <div data-testid="movie-card" key={id} className='w-fit border border-gray-200 rounded-lg shadow m-auto'>
                        <img data-testid="movie-poster" src={poster_path ? `${img_300}/${poster_path}` : unavailable} className='rounded-t-lg' alt="" />
                        <div className='p-3'>
                            <p data-testid="movie-release-date" className='text-2xl text-gray-400 text-[12px] font-[700]'>{release_date}</p>
                            <h3 data-testid="movie-title" className='text-2xl mb-2 text-gray-900 text-[18px] font-[700] truncate max-w-[250px]'>{title}</h3>
                            <div className='flex justify-between'>
                                <span className='flex items-center gap-2'><img src={FilmLogo} alt="" /> <p className='text-gray-600'>{firstTwoPopularity} / 100</p></span>
                                <span className='flex items-center gap-2'><img src={Fruit} alt="" /> <p className='text-gray-600'>{firstTwoVoteCount}%</p></span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default MovieCard