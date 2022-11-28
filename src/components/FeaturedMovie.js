import React from'react';
import './FeaturedMovie.css';

export default({item}) => {
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="Fetured--points">
                        <div className="featured--points">{item.vote_average}</div>
                    </div>
                </div>

            </div>
        </section>
    )
}