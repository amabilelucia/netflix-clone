import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import "./App.css";
import MovieRow from "./components/MovieRow";

export default () => {

  const [movielist, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomelist();
      setMovieList(list);
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movielist.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.itens} />
        ))}
      </section>
    </div>
  );
};