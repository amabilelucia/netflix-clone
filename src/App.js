import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import "./App.css";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from './components/FeaturedMovie';

export default () => {

  const [movielist, setMovieList] = useState([]);
  const [featuredData, setFearturedData] = useState(null)

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomelist();

      setMovieList(list);
      
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length-1));
      let chosen = originals[0].itens.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      console.log(chosenInfo)
      setFearturedData(chosenInfo);

    }
    loadAll();
  }, []);

  return (
    <div className="page">

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      
      <section className="lists">
        {movielist.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.itens} />
        ))}
      </section>
    </div>
  );
};