import React from 'react'
import Logo from "../assets/Logo.png"
import Menu from '../assets/Menu.png'
import Fruit from '../assets/fruit.png'
import FilmLogo from '../assets/IMOb.png'
import PlayBtn from '../assets/Play.svg'
import SearchBar from './SearchBar'
import MovieCard from './MovieCard'
import Footer from './Footer'

const HomePage = () => {
  return (
    <main className='text-white font-sans'>
        <div className='bg-poster bg-cover bg-center'>
            <div className='w-[90%] mx-auto pt-5 pb-20 md:pb-36'>
                <div className='md:flex md:justify-between items-center flex-wrap'>
                    <div className='flex items-center justify-center'>
                        <img src={Logo} alt="" />
                    </div>

                    <div className='flex-1 text-center'>
                        <SearchBar />
                    </div>

                    <div className='flex items-center justify-center'>
                        <img src={Menu} alt="" />
                    </div>
                </div>

                {/* Movie Title */}
                <div className='inline-flex flex-col items-start gap-3 mt-14 w-[305px]'>
                    <p className='text-[48px] font-[700] leading-[56px]'>John Wick 3: Parabellum</p>
                    <div className='flex'><img src={FilmLogo} alt="" /> <span className='ml-3 mr-7'>86.0 / 100</span> <img src={Fruit} alt="" /> <span className='ml-3'>97%</span></div>
                    <p className='text-[14px] font-[500] leading-[18px]'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                    <div className='flex items-center bg-[#BE123C] gap-2 py-[6px] px-[16px] rounded-[6px]'><img src={PlayBtn} alt="" /> <span>Watch trailer</span></div>
                </div>
            </div>
        </div>

        <MovieCard />

        <Footer />
    </main>
  )
}

export default HomePage