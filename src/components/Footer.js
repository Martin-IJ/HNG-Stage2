import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    function openIGProfile() {
      const instagramURL = 'https://www.instagram.com/cm_ice/';
  
      window.open(instagramURL, '_blank');
    }
    
    function openTwitterProfile() {
      const twitterURL = 'https://www.twitter.com/iceDeCoder';
  
      window.open(twitterURL, '_blank');
    }

  return (
    <div className='text-[#111827] flex flex-col gap-10 items-center px-5 py-10'>
        <div className='flex gap-[48px] text-2xl flex-wrap justify-center'>
            <FaFacebookSquare />
            <BsInstagram onClick={openIGProfile} className='cursor-pointer' />
            <BsTwitter onClick={openTwitterProfile} className='cursor-pointer' />
            <BsYoutube />
        </div>

        <ul className='text-[18px] font-[700] flex gap-[48px] flex-wrap justify-center'>
            <li>Conditions of Use</li>
            <li>Privacy & Policy</li>
            <li>Press Room</li>
        </ul>

        <p className='text-[#6B7280] text-center text-[18px] font-[700]'>&copy; {currentYear} MovieBox by <a href='https://www.instagram.com/cm_ice/' target='_blank' className='text-gray-900'>Martins</a> Pka iCe</p>
    </div>
  )
}

export default Footer