import React from "react";
import loadingImg from '../assets/loading.gif'
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../Context";

const SearchBar = () => {
  const { Trigger, loading, handleSubmit, searchText } = useGlobalContext();

  if (loading) {
    return (
      <section style={{ textAlign: "center" }} className="section">
        <img src={loadingImg} alt="" />
        <h4>Loading...</h4>
      </section>
    );
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center max-w-[525px] w-[100%] mx-auto my-5 px-3 py-1 border-solid border-2 border-[#D1D5DB] rounded-lg">
          <input
            type="text"
            value={searchText}
            onChange={Trigger}
            placeholder="What do you want to watch?"
            className="flex-1 bg-transparent border-none outline-none"
          />
          <button type="submit"><AiOutlineSearch /></button>
        </div>
      </form>
    </main>
  );
};

export default SearchBar;
