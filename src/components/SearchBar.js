import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <main>
        <div className='flex items-center max-w-[525px] w-[100%] mx-auto my-5 px-3 py-1 border-solid border-2 border-[#D1D5DB] rounded-lg'>
            <input type="text" placeholder='What do you want to watch?' className='flex-1 bg-transparent' />
            <AiOutlineSearch />
        </div>
    </main>
  )
}

export default SearchBar